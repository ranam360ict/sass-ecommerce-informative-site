type TextPair = {
  en: string;
  bn: string;
};

function T({ en, bn }: TextPair) {
  return (
    <>
      <span className='lang-en'>{en}</span>
      <span className='lang-bn'>{bn}</span>
    </>
  );
}

const footerLinks = [
  {
    title: { en: 'Platform', bn: 'প্ল্যাটফর্ম' },
    links: [
      { label: { en: 'Overview', bn: 'ওভারভিউ' }, href: '#overview' },
      { label: { en: 'User Roles', bn: 'ইউজার রোল' }, href: '#users' },
      {
        label: { en: 'Product Areas', bn: 'প্রোডাক্ট এরিয়া' },
        href: '#products',
      },
    ],
  },
  {
    title: { en: 'Management', bn: 'ম্যানেজমেন্ট' },
    links: [
      { label: { en: 'Admin Panel', bn: 'অ্যাডমিন প্যানেল' }, href: '#admin' },
      {
        label: { en: 'Feature Details', bn: 'ফিচার ডিটেইলস' },
        href: '#features',
      },
      {
        label: { en: 'Business Value', bn: 'বিজনেস ভ্যালু' },
        href: '#business',
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footerMain'>
        <div className='footerBrand'>
          <a className='brand footerLogo' href='#top' aria-label='Memart home'>
            <img
              className='brandLogo'
              src='/memart_logo.jpg'
              alt='Memart logo'
            />
            <strong>Memart</strong>
          </a>
          <p>
            <T
              en='A complete e-commerce SaaS platform for customer shopping, product control, admin management, order tracking, payment monitoring, and delivery workflow.'
              bn='কাস্টমার শপিং, প্রোডাক্ট কন্ট্রোল, অ্যাডমিন ম্যানেজমেন্ট, অর্ডার ট্র্যাকিং, পেমেন্ট মনিটরিং এবং ডেলিভারি ওয়ার্কফ্লোর জন্য পূর্ণাঙ্গ ই-কমার্স SaaS প্ল্যাটফর্ম।'
            />
          </p>
        </div>

        <div className='footerColumns'>
          {footerLinks.map((group) => (
            <div className='footerColumn' key={group.title.en}>
              <h3>
                <T {...group.title} />
              </h3>
              {group.links.map((link) => (
                <a href={link.href} key={link.href}>
                  <T {...link.label} />
                </a>
              ))}
            </div>
          ))}
          <div className='footerColumn footerCredit'>
            <h3>
              <T en='Built By' bn='তৈরি করেছে' />
            </h3>
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              <T en='Designed by M360ICT' bn='ডিজাইন বাই M360ICT' />
            </a>
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              <T en='Visit m360ict.com' bn='m360ict.com দেখুন' />
            </a>
          </div>
        </div>
      </div>

      <div className='footerBottom'>
        <span>
          <T
            en='Memart e-commerce platform'
            bn='Memart ই-কমার্স প্ল্যাটফর্ম '
          />
        </span>
        <span>
          <T
            en='Designed and developed by M360ICT'
            bn='ডিজাইন ও ডেভেলপড বাই M360ICT'
          />
        </span>
      </div>
    </footer>
  );
}
