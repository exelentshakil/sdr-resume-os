export interface ResumeExemplar {
  id: string;
  title: string;
  pivotCategory: 'Retail' | 'Teaching' | 'Hospitality' | 'Customer Support' | 'Athletics & Military' | 'Junior Agency';
  targetVertical: string;
  previousRole: string;
  previousCompany: string;
  placedRole: string;
  placedCompany: string;
  salaryBump: string;
  interviewsWon: number;
  timeToFirstOffer: string;
  beforeHeadline: string;
  afterHeadline: string;
  beforeSummary: string;
  afterSummary: string;
  beforeBullets: string[];
  afterBullets: Array<{
    text: string;
    transformationType: 'QUANTIFIED_METRIC' | 'SDR_POWER_VERB' | 'OUTBOUND_SIGNAL' | 'OBJECTION_HANDLING';
    reasoning: string;
  }>;
  coachingStrategyNotes: string;
  hiringManagerCritique: {
    scanScore: number;
    metricDensity: number;
    gritScore: number;
    verdict: string;
  };
}

export const SDR_EXEMPLARS: ResumeExemplar[] = [
  {
    id: 'ex-01',
    title: 'Retail Shift Supervisor ➔ Enterprise SaaS BDR',
    pivotCategory: 'Retail',
    targetVertical: 'Enterprise Cloud & Data (Snowflake/MongoDB)',
    previousRole: 'Shift Supervisor / Department Lead',
    previousCompany: 'Nordstrom Flagship Store',
    placedRole: 'Inbound / Outbound BDR',
    placedCompany: 'MongoDB',
    salaryBump: '$42k ➔ $82k OTE',
    interviewsWon: 5,
    timeToFirstOffer: '18 Days',
    beforeHeadline: 'Retail Supervisor with 4 Years Customer Service Experience',
    afterHeadline: 'Incoming Business Development Representative (BDR) | High-Volume Outbound Prospecting & Account Qualification',
    beforeSummary: 'Experienced retail associate skilled in cashier operations, inventory checks, customer service, and opening/closing store registers.',
    afterSummary: 'Relentless, coachable outbound prospector transitioning 4 years of high-volume customer conflict resolution and consultative sales into B2B SaaS. Proven track record of exceeding daily volume targets by 130% and qualifying customer needs in high-pressure environments.',
    beforeBullets: [
      'Assisted customers with purchasing shoes and apparel on the sales floor.',
      'Handled customer complaints and processed returns at the service counter.',
      'Helped manage inventory in the backroom and stocked shelves daily.',
      'Trained 4 new team members on store policies and cash register usage.'
    ],
    afterBullets: [
      {
        text: 'Consultatively qualified 80+ customer needs daily on high-traffic retail floor, driving $1.4M in annual departmental revenue and ranking in the top 5% of regional sales associates.',
        transformationType: 'QUANTIFIED_METRIC',
        reasoning: 'Replaced passive floor assistance with daily qualification volume, revenue attribution, and top 5% quota ranking.'
      },
      {
        text: 'Spearheaded store loyalty card outbound engagement, pitching 60+ prospective members daily and achieving 138% of monthly signup quota (averaging 42 new memberships/mo).',
        transformationType: 'OUTBOUND_SIGNAL',
        reasoning: 'Proves outbound pitch grit, high daily touchpoints, and consistent quota overachievement.'
      },
      {
        text: 'De-escalated and resolved 25+ high-friction customer disputes weekly, leveraging active listening to retain 91% of at-risk accounts without senior manager intervention.',
        transformationType: 'OBJECTION_HANDLING',
        reasoning: 'Translates dispute handling into objection handling and customer retention.'
      },
      {
        text: 'Onboarded and coached 6 junior sales associates on product positioning scripts, accelerating their time-to-first-quota from 4 weeks to 11 days.',
        transformationType: 'SDR_POWER_VERB',
        reasoning: 'Highlights leadership, script mastery, and measurable ramp-time reduction.'
      }
    ],
    coachingStrategyNotes: 'Retail associates often hide their quota achievements behind passive duties. We reframed retail loyalty card signups as cold outbound pitching and customer disputes as consultative objection handling.',
    hiringManagerCritique: {
      scanScore: 94,
      metricDensity: 88,
      gritScore: 96,
      verdict: 'Instant 6-second interview trigger. Clear outbound tenacity and numbers on every single bullet.'
    }
  },
  {
    id: 'ex-02',
    title: 'High School English Educator ➔ EdTech Outbound SDR',
    pivotCategory: 'Teaching',
    targetVertical: 'EdTech & Learning Platforms (Instructure / Canvas)',
    previousRole: 'High School English Teacher & Department Chair',
    previousCompany: 'Toronto District School Board',
    placedRole: 'Outbound SDR (K-12 & Higher Ed)',
    placedCompany: 'Instructure (Canvas LMS)',
    salaryBump: '$54k ➔ $78k OTE',
    interviewsWon: 4,
    timeToFirstOffer: '22 Days',
    beforeHeadline: 'Passionate High School English Teacher with Strong Communication Skills',
    afterHeadline: 'Sales Development Representative (SDR) | Multi-Threading K-12 & Higher Ed Decision-Makers | Cold Outreach Specialist',
    beforeSummary: 'Dedicated educator with 5 years creating lesson plans, grading essays, holding parent-teacher meetings, and managing classroom discipline.',
    afterSummary: 'Disciplined communicator leveraging 5 years of complex stakeholder multi-threading (Principals, Superintendents, School Boards) and presentation mastery to drive net-new enterprise EdTech pipeline. Expert in cold outreach sequence design and value proposition articulation.',
    beforeBullets: [
      'Prepared daily lesson plans and taught 150 students across 5 classes.',
      'Met with parents during parent-teacher conferences to discuss student progress.',
      'Organized after-school reading program and ordered books with department budget.',
      'Collaborated with fellow teachers on curriculum updates.'
    ],
    afterBullets: [
      {
        text: 'Multi-threaded communications across 300+ diverse stakeholders (School Principals, District Superintendents, Curriculum Directors), securing consensus on $65k digital curriculum adoption.',
        transformationType: 'OUTBOUND_SIGNAL',
        reasoning: 'Transforms parent meetings into B2B multi-threading across enterprise budget holders.'
      },
      {
        text: 'Delivered 800+ hours of structured, high-engagement presentations annually to skeptical audiences, maintaining a 94% retention rate and leading the district in student literacy benchmarks.',
        transformationType: 'QUANTIFIED_METRIC',
        reasoning: 'Frames classroom lectures as discovery presentations to skeptical prospect personas.'
      },
      {
        text: 'Pioneered an extracurricular literacy campaign that scaled student participation from 22 to 140 participants (+536% growth) across 2 academic semesters through targeted outbound messaging.',
        transformationType: 'SDR_POWER_VERB',
        reasoning: 'Shows growth hacking, campaign execution, and outbound initiative.'
      },
      {
        text: 'Audited and optimized $45k departmental instructional budget, negotiating 18% vendor discounts on educational software subscriptions.',
        transformationType: 'OBJECTION_HANDLING',
        reasoning: 'Demonstrates software literacy and commercial vendor negotiation acumen.'
      }
    ],
    coachingStrategyNotes: 'Teachers make phenomenal SDRs because they are fearless presenters and masters of managing multiple stakeholder egos. We positioned school administration as enterprise buyer personas.',
    hiringManagerCritique: {
      scanScore: 92,
      metricDensity: 85,
      gritScore: 90,
      verdict: 'Speaks the exact language of SaaS enterprise sales (multi-threading, stakeholder consensus, campaign scaling).'
    }
  },
  {
    id: 'ex-03',
    title: 'High-Volume Head Bartender ➔ FinTech / POS Outbound SDR',
    pivotCategory: 'Hospitality',
    targetVertical: 'FinTech & Restaurant Tech (Toast / Stripe / TouchBistro)',
    previousRole: 'Head Bartender & Floor Lead',
    previousCompany: 'King West Hospitality Group (Downtown Toronto)',
    placedRole: 'Outbound BDR (SMB & Mid-Market)',
    placedCompany: 'Toast POS',
    salaryBump: '$48k ➔ $85k OTE',
    interviewsWon: 6,
    timeToFirstOffer: '14 Days',
    beforeHeadline: 'Head Bartender experienced in cocktail crafting and customer satisfaction',
    afterHeadline: 'Sales Development Representative (SDR) | Outbound Prospecting & Discovery | FinTech & Hospitality SaaS',
    beforeSummary: 'Energetic bartender with 6 years experience mixing drinks, managing POS terminals, reconciling cash drawers, and providing friendly hospitality.',
    afterSummary: 'High-velocity, gritty sales development professional with unmatched rapport-building speed and resilience. Deep domain mastery of restaurant operations and POS pain points, primed to execute 90+ daily cold calls to restaurant owners and general managers.',
    beforeBullets: [
      'Mixed craft cocktails and served food to 200+ guests per shift.',
      'Handled high-volume transactions on TouchBistro and Micros POS systems.',
      'Trained junior barbacks and managed inventory ordering every Sunday.',
      'Kept bar station clean and followed all food safety guidelines.'
    ],
    afterBullets: [
      {
        text: 'Drove $28k+ in average gross food and beverage sales per weekend shift, consistently upselling premium spirits and seasonal pairings to increase average table spend by 22%.',
        transformationType: 'QUANTIFIED_METRIC',
        reasoning: 'Replaced drink mixing with gross volume, upsell methodology, and average check size expansion.'
      },
      {
        text: 'Established rapid trust and rapport with 150+ high-net-worth guests per night in a chaotic, fast-paced environment, maintaining a 4.9-star guest feedback rating across 300+ public reviews.',
        transformationType: 'OUTBOUND_SIGNAL',
        reasoning: 'Shows speed-to-rapport and composure under high call/customer volume pressure.'
      },
      {
        text: 'Mastered 3 enterprise hospitality POS platforms (Toast, TouchBistro, Micros), serving as in-house administrator and training 14 team members on menu configurations and payment workflows.',
        transformationType: 'SDR_POWER_VERB',
        reasoning: 'Directly bridges domain credibility to the target tech stack of restaurant SaaS companies.'
      },
      {
        text: 'Audited weekly liquor cost variances, reducing shrinkage from 8.2% to 2.1% across $90k monthly inventory through strict stock control protocols.',
        transformationType: 'OBJECTION_HANDLING',
        reasoning: 'Proves operational business acumen and bottom-line margin awareness.'
      }
    ],
    coachingStrategyNotes: 'Hospitality pros have unmatched phone stamina and face-to-face resilience. We highlighted their POS fluency and ability to speak restaurant owner language.',
    hiringManagerCritique: {
      scanScore: 97,
      metricDensity: 92,
      gritScore: 98,
      verdict: 'A hiring manager in FinTech or restaurant SaaS will salivate over this background. Immediate domain authority.'
    }
  },
  {
    id: 'ex-04',
    title: 'Tier-2 Customer Support Specialist ➔ DevTools / Cloud BDR',
    pivotCategory: 'Customer Support',
    targetVertical: 'DevOps & Observability (Datadog / Postman / LaunchDarkly)',
    previousRole: 'Technical Customer Support Specialist',
    previousCompany: 'SaaS HelpDesk Co.',
    placedRole: 'Inbound / Outbound BDR',
    placedCompany: 'Datadog',
    salaryBump: '$52k ➔ $88k OTE',
    interviewsWon: 4,
    timeToFirstOffer: '19 Days',
    beforeHeadline: 'Customer Support Rep with Zendesk and Technical Troubleshooting Skills',
    afterHeadline: 'Business Development Representative (BDR) | Product-Led Expansion & Technical Discovery | Cloud & DevTools',
    beforeSummary: 'Helpful support agent answering tickets, resolving customer complaints, writing documentation, and assisting users with platform bugs.',
    afterSummary: 'Technical BDR skilled in identifying commercial expansion triggers from user behavior. Combining deep software architecture literacy with consultative discovery to qualify technical buyers (DevOps Engineers, CTOs) and accelerate pipeline velocity.',
    beforeBullets: [
      'Answered 60+ customer tickets per day in Zendesk.',
      'Helped customers troubleshoot API connection errors and login issues.',
      'Wrote 12 internal help articles for the knowledge base.',
      'Participated in weekly team meetings with the product team.'
    ],
    afterBullets: [
      {
        text: 'Triaged 65+ technical support interactions daily with a 98.4% CSAT score, proactively identifying usage patterns that converted into $180k in net-new expansion pipeline.',
        transformationType: 'QUANTIFIED_METRIC',
        reasoning: 'Converts routine ticket answering into active pipeline qualification and expansion revenue.'
      },
      {
        text: 'Diagnosed complex REST API authentication and webhook errors alongside Senior DevOps leads, translating technical root causes into clear commercial solutions.',
        transformationType: 'OUTBOUND_SIGNAL',
        reasoning: 'Proves credibility with technical developer and engineering personas.'
      },
      {
        text: 'Authored 14 developer-facing troubleshooting guides and workflow SOPs, reducing repetitive support tickets by 27% across 12,000 active platform accounts.',
        transformationType: 'SDR_POWER_VERB',
        reasoning: 'Demonstrates structured documentation, scale, and proactive operational improvement.'
      },
      {
        text: 'Identified 35+ churn-risk accounts exhibiting degraded platform adoption, orchestrating custom technical reviews that preserved $92k in recurring annual revenue.',
        transformationType: 'OBJECTION_HANDLING',
        reasoning: 'Frames reactive customer troubleshooting as strategic revenue retention.'
      }
    ],
    coachingStrategyNotes: 'Support agents know the product better than anyone. We taught them to look for expansion triggers and talk about revenue rather than ticket resolution counts.',
    hiringManagerCritique: {
      scanScore: 93,
      metricDensity: 89,
      gritScore: 88,
      verdict: 'DevTools SDR hiring managers struggle to find reps who actually understand APIs. This candidate stands out immediately.'
    }
  },
  {
    id: 'ex-05',
    title: 'Junior Creative Recruiter ➔ HR-Tech / Talent SaaS SDR',
    pivotCategory: 'Junior Agency',
    targetVertical: 'HR-Tech & Recruitment SaaS (Gem / Ashby / Greenhouse)',
    previousRole: 'Junior Staffing Recruiter & Sourcer',
    previousCompany: 'TalentForce Agency',
    placedRole: 'Outbound SDR',
    placedCompany: 'Ashby',
    salaryBump: '$45k ➔ $80k OTE',
    interviewsWon: 5,
    timeToFirstOffer: '15 Days',
    beforeHeadline: 'Recruiter sourcing resumes and scheduling candidate interviews',
    afterHeadline: 'Sales Development Representative (SDR) | Outbound Prospecting & Boolean Sourcing | HR-Tech SaaS',
    beforeSummary: 'Recruiter finding candidates on LinkedIn, reviewing resumes, scheduling screening calls, and coordinating with hiring managers.',
    afterSummary: 'Tenacious outbound pipeline generator with 2 years mastering Boolean search, LinkedIn Sales Navigator, and multi-channel outreach. Expert in crafting hyper-personalized cadences that convert cold prospects into qualified sales meetings.',
    beforeBullets: [
      'Sourced candidates for engineering and marketing roles on LinkedIn.',
      'Conducted 20-minute initial phone screens with applicants.',
      'Scheduled interviews with client hiring managers.',
      'Maintained candidate records in Bullhorn ATS.'
    ],
    afterBullets: [
      {
        text: 'Executed 120+ personalized cold outreach messages and phone cadences daily via LinkedIn Recruiter and email, achieving a 31% response rate (2x agency average).',
        transformationType: 'OUTBOUND_SIGNAL',
        reasoning: 'Proves high-volume cold cadencing, response rate metrics, and outperforming company benchmarks.'
      },
      {
        text: 'Generated $320k in net billing fees across 4 quarters by qualifying 180+ passive candidates and booking 64 final-stage client interviews.',
        transformationType: 'QUANTIFIED_METRIC',
        reasoning: 'Ties recruiting activity directly to gross revenue generation and qualified meeting conversions.'
      },
      {
        text: 'Engineered advanced Boolean search strings and talent mapping matrices across 45 target tech companies, surfacing 2,400+ qualified senior prospects.',
        transformationType: 'SDR_POWER_VERB',
        reasoning: 'Demonstrates sophisticated list building, account mapping, and TAM discovery.'
      },
      {
        text: 'Overcame candidate compensation and counter-offer objections during final-stage negotiations, securing a 92% offer acceptance rate.',
        transformationType: 'OBJECTION_HANDLING',
        reasoning: 'Proves closing grit, counter-offer handling, and deal preservation.'
      }
    ],
    coachingStrategyNotes: 'Agency recruiters are already doing SDR work (cold outbound to candidates). We simply converted their recruiting metrics into sales development pipeline metrics.',
    hiringManagerCritique: {
      scanScore: 96,
      metricDensity: 94,
      gritScore: 95,
      verdict: 'Flawless transition. Shows proven prospecting volume, high conversion rate, and familiarity with outreach tooling.'
    }
  }
];

export const METHODOLOGY_RULES = [
  {
    ruleNumber: 1,
    name: 'The 6-Second Glance Rule',
    description: 'SDR hiring managers spend 6.2 seconds on average scanning a resume. The headline and summary must immediately scream "I do outbound prospecting and love hitting quota", not generic career objectives.',
    weight: '25%'
  },
  {
    ruleNumber: 2,
    name: 'The 70% Metric Density Law',
    description: 'At least 7 out of every 10 bullet points must contain hard numbers ($, %, quota attainment, daily touchpoints, headcount, or time-to-close). Bullets without numbers read like job descriptions, not sales achievements.',
    weight: '30%'
  },
  {
    ruleNumber: 3,
    name: 'Non-Sales Activity Translation Matrix',
    description: 'Every non-sales action maps to an SDR competency: floor customer service ➔ inbound qualification; register upselling ➔ pipeline expansion; parent conferences ➔ multi-threading; handling disputes ➔ objection handling.',
    weight: '20%'
  },
  {
    ruleNumber: 4,
    name: 'Outbound Tech Stack Literacy',
    description: 'Even without formal SaaS experience, resumes must showcase familiarity with sales intelligence & CRM tools (Salesforce, HubSpot, Apollo.io, ZoomInfo, Outreach, LinkedIn Sales Navigator).',
    weight: '15%'
  },
  {
    ruleNumber: 5,
    name: 'Grit & Activity Volume Proof',
    description: 'SDR leaders look for stamina and phone resilience. Bullets must quantify daily or weekly activity cadences (e.g. 80+ customer touches, 50+ outbound dials, 30+ personalized messages).',
    weight: '10%'
  }
];
