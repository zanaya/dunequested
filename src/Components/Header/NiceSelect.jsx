import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { isRTL } from '../../config/languages';

const NiceSelect = ({ options, defaultValue, isLanguageSelect = false, onChange }) => {
    const [selected, setSelected] = useState(defaultValue || (options && options[0] ? options[0].label : ''));
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { i18n } = useTranslation();

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelected(option.label);
        setIsOpen(false);
        if (onChange) onChange(option.value);
        if (isLanguageSelect) {
            i18n.changeLanguage(option.value);
            // Update HTML dir attribute for RTL languages
            document.documentElement.dir = isRTL(option.value) ? 'rtl' : 'ltr';
            // Add a class to body for RTL-specific styling
            document.body.classList.toggle('rtl', isRTL(option.value));
        }
    };

    return (
        <div className="nice-select-wrapper">
            <div
                className={`nice-select ${isOpen ? "open" : ""}`}
                ref={dropdownRef}
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="current">{selected}</span>
                <ul
                    className="list"
                    role="listbox"
                    aria-hidden={!isOpen}
                    style={isOpen ? { maxHeight: "180px", overflowY: "auto" } : undefined}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="option"
                            role="option"
                            aria-selected={selected === option.label}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NiceSelect;