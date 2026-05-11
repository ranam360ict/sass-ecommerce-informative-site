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

const supportDetails = [
  {
    label: 'Call',
    value: '09638-336699, 01958398325, 01958398313, +880 1958-398308',
    href: 'tel:+8809638336699',
  },
  {
    label: 'Timing',
    value: '10:00AM to 06:00PM',
  },
  {
    label: 'Email',
    value: 'sup.m360ict@gmail.com',
    href: 'mailto:sup.m360ict@gmail.com',
  },
];

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footerMain'>
        <div className='footerBrand'>
          <a className='brand footerLogo' href='#top' aria-label='Home'>
            <img className='brandLogo' src='/memart_logo.png' alt='Logo' />
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
              <h5 className='footerGroupTitle'>
                <T {...group.title} />
              </h5>
              {group.links.map((link) => (
                <a href={link.href} key={link.href}>
                  <T {...link.label} />
                </a>
              ))}
            </div>
          ))}
          <section
            className='footerColumn footerSupport'
            aria-labelledby='footer-support-title'
          >
            <p className='footerSupportKicker'>Support Details</p>

            <div className='footerSupportRows'>
              {supportDetails.map((item) => (
                <div className='footerSupportRow' key={item.label}>
                  <span>{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className='footerBottom'>
        <span>
          <T en='E-commerce platform' bn='ই-কমার্স প্ল্যাটফর্ম ' />
        </span>
        <span>
          <span className='lang-en'>
            Designed and developed by{' '}
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              M360ICT
            </a>
          </span>
          <span className='lang-bn'>
            ডিজাইন ও ডেভেলপড বাই{' '}
            <a href='https://m360ict.com/' target='_blank' rel='noreferrer'>
              M360ICT
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}
