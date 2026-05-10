import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollReveal } from './components/ScrollReveal';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://m360ict.com';

type TextPair = {
  en: string;
  bn: string;
};

function T({ en, bn, className }: TextPair & { className?: string }) {
  return (
    <>
      <span className={`lang-en${className ? ` ${className}` : ''}`}>{en}</span>
      <span className={`lang-bn${className ? ` ${className}` : ''}`}>{bn}</span>
    </>
  );
}

const platformSections = [
  {
    name: { en: 'Online Shopping Website', bn: 'অনলাইন শপিং ওয়েবসাইট' },
    detail: {
      en: 'Customers can browse products by category, view offers, search items, add to cart, checkout, and follow order status from a clean storefront.',
      bn: 'কাস্টমার ক্যাটাগরি দেখে প্রোডাক্ট খুঁজতে, অফার দেখতে, কার্টে যোগ করতে, অর্ডার করতে এবং ডেলিভারি স্ট্যাটাস ট্র্যাক করতে পারে।',
    },
    accent: 'coral',
  },
  {
    name: {
      en: 'Product & Inventory Control',
      bn: 'প্রোডাক্ট ও ইনভেন্টরি কন্ট্রোল',
    },
    detail: {
      en: 'The team can add products, manage variants, update prices, control stock, organize offers, and keep the catalog ready for sales.',
      bn: 'টিম প্রোডাক্ট যোগ করতে, ভ্যারিয়েন্ট ম্যানেজ করতে, দাম আপডেট করতে, স্টক কন্ট্রোল করতে, অফার সাজাতে এবং ক্যাটালগ সেলসের জন্য প্রস্তুত রাখতে পারে।',
    },
    accent: 'mint',
  },
  {
    name: { en: 'Central Admin Panel', bn: 'সেন্ট্রাল অ্যাডমিন প্যানেল' },
    detail: {
      en: 'The business owner can control customers, products, categories, orders, payments, delivery, coupons, staff access, and reports.',
      bn: 'বিজনেস মালিক কাস্টমার, প্রোডাক্ট, ক্যাটাগরি, অর্ডার, পেমেন্ট, ডেলিভারি, কুপন, স্টাফ অ্যাক্সেস এবং রিপোর্ট এক জায়গা থেকে ম্যানেজ করতে পারে।',
    },
    accent: 'navy',
  },
  {
    name: { en: 'Complete Order System', bn: 'কমপ্লিট অর্ডার সিস্টেম' },
    detail: {
      en: 'From product selection to payment, delivery update, cancellation, refund, and invoice, every important e-commerce step stays organized.',
      bn: 'প্রোডাক্ট সিলেকশন থেকে পেমেন্ট, ডেলিভারি আপডেট, ক্যানসেল, রিফান্ড ও ইনভয়েস পর্যন্ত পুরো অর্ডার প্রসেস সাজানো থাকে।',
    },
    accent: 'gold',
  },
];

const audienceCards = [
  {
    title: { en: 'For E-Commerce Owners', bn: 'ই-কমার্স মালিকদের জন্য' },
    copy: {
      en: 'Memart gives business owners one system to run online sales with products, customers, orders, payments, delivery, and reports under control.',
      bn: 'Memart ব্যবসার মালিককে প্রোডাক্ট, কাস্টমার, অর্ডার, পেমেন্ট, ডেলিভারি ও রিপোর্টসহ পুরো অনলাইন সেলস অপারেশন কন্ট্রোল করার সুবিধা দেয়।',
    },
    points: [
      { en: 'Central dashboard', bn: 'সেন্ট্রাল ড্যাশবোর্ড' },
      { en: 'Sales overview', bn: 'সেলস ওভারভিউ' },
      { en: 'Staff friendly workflow', bn: 'স্টাফ ফ্রেন্ডলি ওয়ার্কফ্লো' },
    ],
  },
  {
    title: { en: 'For Operations Teams', bn: 'অপারেশন টিমের জন্য' },
    copy: {
      en: 'Staff can manage product data, update stock, process orders, coordinate delivery, and keep daily e-commerce work organized.',
      bn: 'স্টাফ প্রোডাক্ট ডাটা ম্যানেজ, স্টক আপডেট, অর্ডার প্রসেস, ডেলিভারি কোঅর্ডিনেট এবং প্রতিদিনের ই-কমার্স কাজ গুছিয়ে রাখতে পারে।',
    },
    points: [
      { en: 'Product listing', bn: 'প্রোডাক্ট লিস্টিং' },
      { en: 'Stock control', bn: 'স্টক কন্ট্রোল' },
      { en: 'Order processing', bn: 'অর্ডার প্রসেসিং' },
    ],
  },
  {
    title: { en: 'For Customers', bn: 'কাস্টমারদের জন্য' },
    copy: {
      en: 'Customers get a smooth shopping experience where they can discover products, view details, use offers, checkout, and track orders.',
      bn: 'কাস্টমার সহজে প্রোডাক্ট খুঁজতে, ডিটেইলস দেখতে, অফার ব্যবহার করতে, চেকআউট করতে এবং অর্ডার ট্র্যাক করতে পারে।',
    },
    points: [
      { en: 'Easy browsing', bn: 'সহজ ব্রাউজিং' },
      { en: 'Secure checkout', bn: 'সিকিউর চেকআউট' },
      { en: 'Order tracking', bn: 'অর্ডার ট্র্যাকিং' },
    ],
  },
];

const metrics = [
  {
    value: { en: 'Buyer', bn: 'ক্রেতা' },
    label: { en: 'shop, order, track', bn: 'শপ, অর্ডার, ট্র্যাক' },
  },
  {
    value: { en: 'Inventory', bn: 'ইনভেন্টরি' },
    label: { en: 'price, stock, offer', bn: 'দাম, স্টক, অফার' },
  },
  {
    value: { en: 'Admin', bn: 'অ্যাডমিন' },
    label: { en: 'approve, manage, report', bn: 'অ্যাপ্রুভ, ম্যানেজ, রিপোর্ট' },
  },
];

const featureColumns = [
  {
    title: { en: 'Customer Experience', bn: 'কাস্টমার এক্সপেরিয়েন্স' },
    items: [
      {
        en: 'Home page with banners, featured products, and promotional sections',
        bn: 'ব্যানার, ফিচারড প্রোডাক্ট এবং প্রমোশনাল সেকশনসহ হোম পেজ',
      },
      {
        en: 'Category, brand, search, filter, and product detail pages',
        bn: 'ক্যাটাগরি, ব্র্যান্ড, সার্চ, ফিল্টার এবং প্রোডাক্ট ডিটেইল পেজ',
      },
      {
        en: 'Cart, wishlist, checkout, invoice, and customer account area',
        bn: 'কার্ট, উইশলিস্ট, চেকআউট, ইনভয়েস এবং কাস্টমার অ্যাকাউন্ট এরিয়া',
      },
      {
        en: 'Order history with payment and delivery status updates',
        bn: 'পেমেন্ট ও ডেলিভারি স্ট্যাটাসসহ অর্ডার হিস্টোরি',
      },
    ],
  },
  {
    title: { en: 'Catalog Operations', bn: 'ক্যাটালগ অপারেশন' },
    items: [
      {
        en: 'Product catalog setup with category, brand, and attribute structure',
        bn: 'ক্যাটাগরি, ব্র্যান্ড এবং অ্যাট্রিবিউট স্ট্রাকচারসহ প্রোডাক্ট ক্যাটালগ সেটআপ',
      },
      {
        en: 'Product upload with images, price, discount, variants, and stock',
        bn: 'ইমেজ, দাম, ডিসকাউন্ট, ভ্যারিয়েন্ট এবং স্টকসহ প্রোডাক্ট আপলোড',
      },
      {
        en: 'Order queue with status update and fulfilment support',
        bn: 'স্ট্যাটাস আপডেট ও ফুলফিলমেন্ট সাপোর্টসহ অর্ডার কিউ',
      },
      {
        en: 'Sales summary, product performance, and stock movement tracking',
        bn: 'সেলস সামারি, প্রোডাক্ট পারফরম্যান্স এবং স্টক মুভমেন্ট ট্র্যাকিং',
      },
    ],
  },
  {
    title: { en: 'Admin Management', bn: 'অ্যাডমিন ম্যানেজমেন্ট' },
    items: [
      {
        en: 'Approve products, reviews, campaigns, and platform content',
        bn: 'প্রোডাক্ট, রিভিউ, ক্যাম্পেইন এবং প্ল্যাটফর্ম কনটেন্ট অ্যাপ্রুভ',
      },
      {
        en: 'Manage categories, brands, attributes, coupons, banners, and fees',
        bn: 'ক্যাটাগরি, ব্র্যান্ড, অ্যাট্রিবিউট, কুপন, ব্যানার এবং ফি ম্যানেজ',
      },
      {
        en: 'Monitor orders, payments, refunds, delivery status, and commissions',
        bn: 'অর্ডার, পেমেন্ট, রিফান্ড, ডেলিভারি স্ট্যাটাস এবং কমিশন মনিটর',
      },
      {
        en: 'Track sales reports, customer activity, product performance, and growth',
        bn: 'সেলস রিপোর্ট, কাস্টমার অ্যাক্টিভিটি, প্রোডাক্ট পারফরম্যান্স এবং গ্রোথ ট্র্যাক',
      },
    ],
  },
];

const adminModules = [
  {
    en: 'Dashboard overview with sales, orders, inventory, and customer activity',
    bn: 'সেলস, অর্ডার, ইনভেন্টরি এবং কাস্টমার অ্যাক্টিভিটিসহ ড্যাশবোর্ড ওভারভিউ',
  },
  {
    en: 'Product approval, category setup, brand setup, and stock monitoring',
    bn: 'প্রোডাক্ট অ্যাপ্রুভাল, ক্যাটাগরি সেটআপ, ব্র্যান্ড সেটআপ এবং স্টক মনিটরিং',
  },
  {
    en: 'Staff access, role control, approval workflow, and activity tracking',
    bn: 'স্টাফ অ্যাক্সেস, রোল কন্ট্রোল, অ্যাপ্রুভাল ওয়ার্কফ্লো এবং অ্যাক্টিভিটি ট্র্যাকিং',
  },
  {
    en: 'Order management with payment status, delivery status, invoice, and refund support',
    bn: 'পেমেন্ট স্ট্যাটাস, ডেলিভারি স্ট্যাটাস, ইনভয়েস এবং রিফান্ড সাপোর্টসহ অর্ডার ম্যানেজমেন্ট',
  },
  {
    en: 'Coupon, campaign, banner, featured product, and promotional content control',
    bn: 'কুপন, ক্যাম্পেইন, ব্যানার, ফিচারড প্রোডাক্ট এবং প্রমোশনাল কনটেন্ট কন্ট্রোল',
  },
];

const businessBenefits = [
  {
    en: 'Launch a professional e-commerce SaaS platform faster',
    bn: 'দ্রুত একটি প্রফেশনাল ই-কমার্স SaaS প্ল্যাটফর্ম চালু করা যায়',
  },
  {
    en: 'Keep products, stock, pricing, and offers under central control',
    bn: 'প্রোডাক্ট, স্টক, প্রাইসিং এবং অফার সেন্ট্রাল কন্ট্রোলে রাখা যায়',
  },
  {
    en: 'Keep customer orders, payments, and delivery updates in one system',
    bn: 'কাস্টমার অর্ডার, পেমেন্ট এবং ডেলিভারি আপডেট এক সিস্টেমে থাকে',
  },
  {
    en: 'Use admin reports to understand sales, product demand, and growth opportunities',
    bn: 'সেলস, প্রোডাক্ট ডিমান্ড এবং গ্রোথ সুযোগ বুঝতে অ্যাডমিন রিপোর্ট ব্যবহার করা যায়',
  },
  {
    en: 'Promote products with campaigns, coupons, banners, and featured sections',
    bn: 'ক্যাম্পেইন, কুপন, ব্যানার এবং ফিচারড সেকশন দিয়ে প্রোডাক্ট প্রমোট করা যায়',
  },
];

const journeySteps = [
  {
    label: { en: 'Discover', bn: 'খুঁজুন' },
    text: {
      en: 'Customers enter Memart, browse categories, view promotions, and find products through search and filters.',
      bn: 'কাস্টমার Memart-এ এসে ক্যাটাগরি ব্রাউজ করে, প্রমোশন দেখে এবং সার্চ-ফিল্টারের মাধ্যমে প্রোডাক্ট খুঁজে পায়।',
    },
  },
  {
    label: { en: 'Compare', bn: 'তুলনা করুন' },
    text: {
      en: 'Product pages explain price, variants, stock availability, delivery options, and offer details.',
      bn: 'প্রোডাক্ট পেজে দাম, ভ্যারিয়েন্ট, স্টক অ্যাভেইলেবিলিটি, ডেলিভারি অপশন এবং অফার ডিটেইলস দেখা যায়।',
    },
  },
  {
    label: { en: 'Order', bn: 'অর্ডার করুন' },
    text: {
      en: 'Customers add products to cart, checkout, select payment method, and receive order confirmation.',
      bn: 'কাস্টমার প্রোডাক্ট কার্টে যোগ করে, চেকআউট করে, পেমেন্ট মেথড সিলেক্ট করে এবং অর্ডার কনফার্মেশন পায়।',
    },
  },
  {
    label: { en: 'Manage', bn: 'ম্যানেজ করুন' },
    text: {
      en: 'The operations team processes the order, updates status, handles payment, and prepares delivery.',
      bn: 'অপারেশন টিম অর্ডার প্রসেস করে, স্ট্যাটাস আপডেট করে, পেমেন্ট হ্যান্ডেল করে এবং ডেলিভারি প্রস্তুত করে।',
    },
  },
  {
    label: { en: 'Deliver', bn: 'ডেলিভারি দিন' },
    text: {
      en: 'The customer can follow delivery status while admin keeps records for invoice, refund, and reporting.',
      bn: 'কাস্টমার ডেলিভারি স্ট্যাটাস দেখতে পারে এবং অ্যাডমিন ইনভয়েস, রিফান্ড ও রিপোর্টিংয়ের জন্য রেকর্ড রাখে।',
    },
  },
];

const productExamples = [
  {
    title: { en: 'Fashion Products', bn: 'ফ্যাশন প্রোডাক্ট' },
    tag: {
      en: 'Clothing, shoes, accessories',
      bn: 'ক্লথিং, জুতা, অ্যাকসেসরিজ',
    },
    price: { en: 'Variants + stock', bn: 'ভ্যারিয়েন্ট + স্টক' },
    colors: ['#f15f5f', '#1d938b', '#14213d'],
  },
  {
    title: { en: 'Electronics Items', bn: 'ইলেকট্রনিক্স আইটেম' },
    tag: {
      en: 'Mobile, gadget, appliance',
      bn: 'মোবাইল, গ্যাজেট, অ্যাপ্লায়েন্স',
    },
    price: { en: 'Warranty + offers', bn: 'ওয়ারেন্টি + অফার' },
    colors: ['#ffd166', '#2f4858', '#3bb273'],
  },
  {
    title: { en: 'Daily Essentials', bn: 'ডেইলি এসেনশিয়ালস' },
    tag: { en: 'Home, grocery, lifestyle', bn: 'হোম, গ্রোসারি, লাইফস্টাইল' },
    price: { en: 'Delivery + invoice', bn: 'ডেলিভারি + ইনভয়েস' },
    colors: ['#f7f0e8', '#e85d75', '#276fbf'],
  },
];

export default function Home() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Memart',
      alternateName: 'Memart E-Commerce SaaS',
      url: siteUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Memart by M360ICT is an e-commerce SaaS platform for customer storefront, product and inventory control, admin management, order tracking, payment control, and delivery workflow.',
      creator: {
        '@type': 'Organization',
        name: 'M360ICT',
        url: 'https://m360ict.com/',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BDT',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'M360ICT',
      url: 'https://m360ict.com/',
      brand: {
        '@type': 'Brand',
        name: 'Memart',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce SaaS Platform',
          description:
            'E-commerce software for online shopping, admin control, inventory, orders, payments, and delivery workflow.',
        },
      },
    },
  ];

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <ScrollReveal />

      <section className='hero' id='top'>
        <div className='heroMedia' aria-hidden='true' />
        <div className='heroShade' />
        <div className='heroContent'>
          <h1>
            Memart{' '}
            <span className='subtitle'>
              E-commerce SaaS That Keeps Sales Moving
            </span>
          </h1>
          <p>
            <T
              en='Memart is a complete e-commerce SaaS platform for growing online businesses. It connects storefront, catalog, orders, payments, delivery, and admin control so the team can sell faster and manage smarter.'
              bn='Memart গ্রোইং অনলাইন বিজনেসের জন্য একটি পূর্ণাঙ্গ ই-কমার্স SaaS প্ল্যাটফর্ম। এখানে স্টোরফ্রন্ট, ক্যাটালগ, অর্ডার, পেমেন্ট, ডেলিভারি এবং অ্যাডমিন কন্ট্রোল কানেক্টেড থাকে, তাই টিম দ্রুত সেল করতে এবং স্মার্টভাবে ম্যানেজ করতে পারে।'
            />
          </p>
          <div className='heroProof' aria-label='Memart user areas'>
            <span>
              <T en='Customer Website' bn='কাস্টমার সাইট' />
            </span>
            <span>
              <T en='Product Control' bn='প্রোডাক্ট কন্ট্রোল' />
            </span>
            <span>
              <T en='Admin Panel' bn='অ্যাডমিন প্যানেল' />
            </span>
          </div>
          <div className='heroActions'>
            <a className='primaryBtn' href='#overview'>
              <T en='See How Memart Works' bn='Memart কীভাবে কাজ করে দেখুন' />
            </a>
          </div>
        </div>
      </section>

      <section className='ticker' aria-label='Memart highlights'>
        <span>
          <T en='Customer storefront' bn='কাস্টমার শপিং সাইট' />
        </span>
        <span>
          <T en='Product & stock control' bn='প্রোডাক্ট ও স্টক কন্ট্রোল' />
        </span>
        <span>
          <T en='Admin management' bn='অ্যাডমিন ম্যানেজমেন্ট' />
        </span>
        <span>
          <T en='Orders, payment & delivery' bn='অর্ডার, পেমেন্ট ও ডেলিভারি' />
        </span>
      </section>

      <section className='section introBand' id='overview'>
        <div className='sectionHeading'>
          <p className='eyebrow'>
            <T en='Clear platform overview' bn='প্ল্যাটফর্ম ওভারভিউ' />
          </p>
          <h2>
            <T
              en='Run products, orders, payments, and delivery from one smart platform.'
              bn='একটি স্মার্ট প্ল্যাটফর্ম থেকে প্রোডাক্ট, অর্ডার, পেমেন্ট এবং ডেলিভারি চালান।'
            />
          </h2>
          <p className='sectionIntro'>
            <T
              en='The storefront, admin panel, product management, order workflow, payment control, and delivery updates stay connected inside one system.'
              bn='স্টোরফ্রন্ট, অ্যাডমিন প্যানেল, প্রোডাক্ট ম্যানেজমেন্ট, অর্ডার ওয়ার্কফ্লো, পেমেন্ট কন্ট্রোল এবং ডেলিভারি আপডেট এক সিস্টেমে কানেক্টেড থাকে।'
            />
          </p>
        </div>
        <div className='categoryGrid'>
          {platformSections.map((section) => (
            <article
              className={`categoryCard ${section.accent}`}
              key={section.name.en}
            >
              <div className='tileMark'>
                <span />
                <span />
                <span />
              </div>
              <h3>
                <T {...section.name} />
              </h3>
              <p>
                <T {...section.detail} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className='section audienceBand' id='users'>
        <div className='sectionHeading compact'>
          <p className='eyebrow'>
            <T en='Who Memart is for' bn='Memart কার জন্য' />
          </p>
          <h2>
            <T
              en='Give every team member the right tools without losing central control.'
              bn='সেন্ট্রাল কন্ট্রোল রেখে প্রতিটি টিম মেম্বারকে সঠিক টুল দিন।'
            />
          </h2>
        </div>
        <div className='audienceGrid'>
          {audienceCards.map((card) => (
            <article className='audienceCard' key={card.title.en}>
              <h3>
                <T {...card.title} />
              </h3>
              <p>
                <T {...card.copy} />
              </p>
              <div className='pointList'>
                {card.points.map((point) => (
                  <span key={point.en}>
                    <T {...point} />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='section splitBand' id='admin'>
        <div className='insightPanel'>
          <p className='eyebrow'>
            <T en='Admin panel information' bn='অ্যাডমিন প্যানেল ইনফরমেশন' />
          </p>
          <h2>
            <T
              en='Control the full e-commerce operation with confidence.'
              bn='আত্মবিশ্বাসের সাথে পুরো ই-কমার্স অপারেশন কন্ট্রোল করুন।'
            />
          </h2>
          <p>
            <T
              en='Memart includes a strong admin area for business owners and staff. From this panel, the team can manage product data, check orders, update payment and delivery status, create offers, control access, and view business performance reports.'
              bn='Memart-এ বিজনেস মালিক ও স্টাফের জন্য শক্তিশালী অ্যাডমিন এরিয়া আছে। এখান থেকে প্রোডাক্ট ডাটা ম্যানেজ, অর্ডার চেক, পেমেন্ট ও ডেলিভারি স্ট্যাটাস আপডেট, অফার তৈরি, অ্যাক্সেস কন্ট্রোল এবং রিপোর্ট দেখা যায়।'
            />
          </p>
          <div className='metricRow'>
            {metrics.map((metric) => (
              <div className='metric' key={metric.value.en}>
                <strong>
                  <T {...metric.value} />
                </strong>
                <span>
                  <T {...metric.label} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='serviceStack'>
          {adminModules.map((module, index) => (
            <div className='serviceItem' key={module.en}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <T {...module} />
            </div>
          ))}
        </div>
      </section>

      <section className='section featureBand' id='features'>
        <div className='sectionHeading'>
          <h2>
            <T
              en='Everything your e-commerce team needs to sell, fulfil, and grow.'
              bn='সেল, ফুলফিল এবং গ্রো করার জন্য আপনার ই-কমার্স টিমের যা দরকার।'
            />
          </h2>
          <p className='eyebrow'>
            <T en='Detailed feature information' bn='ডিটেইল ফিচার ইনফরমেশন' />
          </p>
        </div>
        <div className='featureGrid'>
          {featureColumns.map((column) => (
            <article className='featureColumn' key={column.title.en}>
              <h3>
                <T {...column.title} />
              </h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item.en}>
                    <T {...item} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className='section workflowBand' id='business'>
        <div className='sectionHeading compact'>
          <p className='eyebrow'>
            <T en='Business value' bn='বিজনেস ভ্যালু' />
          </p>
          <h2>
            <T
              en='Built to reduce manual work and increase business control.'
              bn='ম্যানুয়াল কাজ কমিয়ে বিজনেস কন্ট্রোল বাড়ানোর জন্য তৈরি।'
            />
          </h2>
        </div>
        <div className='flowGrid'>
          {businessBenefits.map((benefit, index) => (
            <div className='flowStep' key={benefit.en}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>
                <T {...benefit} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className='section journeyBand'>
        <div className='sectionHeading'>
          <p className='eyebrow'>
            <T en='Shopping and order journey' bn='শপিং ও অর্ডার জার্নি' />
          </p>
          <h2>
            <T
              en='A clear path from product discovery to successful delivery.'
              bn='প্রোডাক্ট খোঁজা থেকে সফল ডেলিভারি পর্যন্ত পরিষ্কার পথ।'
            />
          </h2>
        </div>
        <div className='journeyRail'>
          {journeySteps.map((step, index) => (
            <article className='journeyStep' key={step.label.en}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <h3>
                <T {...step.label} />
              </h3>
              <p>
                <T {...step.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className='section productBand' id='products'>
        <div className='sectionHeading compact'>
          <p className='eyebrow'>
            <T en='Product selling areas' bn='প্রোডাক্ট সেলিং এরিয়া' />
          </p>
          <h2>
            <T
              en='Manage different product lines from the same e-commerce engine.'
              bn='একই ই-কমার্স ইঞ্জিন থেকে বিভিন্ন প্রোডাক্ট লাইন ম্যানেজ করুন।'
            />
          </h2>
        </div>
        <div className='productGrid'>
          {productExamples.map((product) => (
            <article className='productCard' key={product.title.en}>
              <div className='productVisual'>
                <div className='boxShape' />
                <div className='diskShape' />
              </div>
              <div className='productInfo'>
                <span>
                  <T {...product.tag} />
                </span>
                <h3>
                  <T {...product.title} />
                </h3>
                <div className='productMeta'>
                  <strong>
                    <T {...product.price} />
                  </strong>
                  <div className='swatches' aria-label={product.title.en}>
                    {product.colors.map((color) => (
                      <i key={color} style={{ background: color }} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
