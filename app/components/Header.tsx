'use client';

import { useEffect, useState } from 'react';

type Language = 'en' | 'bn';

const languageKey = 'memart-language';

const navItems = [
  { en: 'Overview', bn: 'ওভারভিউ', href: '#overview' },
  { en: 'Users', bn: 'ইউজার', href: '#users' },
  { en: 'Admin', bn: 'অ্যাডমিন', href: '#admin' },
  { en: 'Features', bn: 'ফিচার', href: '#features' },
  { en: 'Business', bn: 'বিজনেস', href: '#business' },
  { en: 'Products', bn: 'প্রোডাক্ট', href: '#products' },
];

function applyLanguage(language: Language) {
  document.documentElement.dataset.lang = language;
  document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  localStorage.setItem(languageKey, language);
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem(languageKey) === 'bn' ? 'bn' : 'en';
    setLanguage(savedLanguage);
    applyLanguage(savedLanguage);
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  };

  return (
    <header className='siteHeader'>
      <nav className='nav' aria-label='Main navigation'>
        <a
          className='brand'
          href='#top'
          aria-label='Memart home'
          onClick={() => setIsOpen(false)}
        >
          <img
            className='brandLogo'
            src='/memart_logo.jpg'
            alt='Memart logo'
          />
          <div className='brandText'>
            <strong>Memart</strong>
            <small>E-commerce SaaS</small>
          </div>
        </a>

        <div className='navControls'>
          <div className='languageSwitch' aria-label='Language selector'>
            <button
              className={language === 'en' ? 'active' : ''}
              type='button'
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={language === 'bn' ? 'active' : ''}
              type='button'
              onClick={() => changeLanguage('bn')}
            >
              বাংলা
            </button>
          </div>

          <button
            className='menuToggle'
            type='button'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
            onClick={() => setIsOpen((current) => !current)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>

        <div
          className={`navLinks ${isOpen ? 'open' : ''}`}
          id='mobile-navigation'
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span className='lang-en'>{item.en}</span>
              <span className='lang-bn'>{item.bn}</span>
            </a>
          ))}
          <a
            className='navCta'
            href='https://m360ict.com/'
            target='_blank'
            rel='noreferrer'
            onClick={() => setIsOpen(false)}
          >
            M360ICT
          </a>
        </div>
      </nav>
    </header>
  );
}
