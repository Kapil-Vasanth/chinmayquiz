import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TIERS = {
    "Unaware": {
      headline: "Every expert started exactly where you are.",
      subline: "Right now, finance may feel like someone else's job. But every decision you make — who to hire, what to charge, whether to invest — is a financial decision. The moment you start seeing this, everything changes. Here are three ways to start, at every budget.",
      testimonial: { text: "Chinmay made finance fun to learn — one of the best sessions I've attended in a long time.", attr: "Angshuman, Co-founder, Indianstartups.com" },
      cards: [
        { type: "featured", badge: "Best first step", badgeClass: "badge-purple",
          icon: "📖", title: "The Bottomline — Book by Chinmay Ananda",
          desc: "Written in plain English with real business stories. Builds your financial foundation from the ground up — no jargon, no prior background needed. If finance has ever felt intimidating, this book was written for you.",
          checks: ["Understand P&L, Balance Sheet and Cash Flow in plain language","Learn why profitable businesses run out of cash — and how to avoid it","Build a CFO mindset without a finance background","Available on Amazon — India and worldwide"],
          btnLabel: "📖 Get the book on Amazon ↗", btnClass: "btn-primary", btnUrlKey: "book",
          priceNow: null },
        { type: "normal",
          icon: "🎬", title: "Business Finance Essentials — 18 Videos · 75 Minutes",
          desc: "The fastest way to build your financial vocabulary. 18 focused lessons covering all financial statement basics, key ratios, and cash flow — at your own pace, on any device.",
          checks: ["18 focused video lessons — watch in any order","Covers all financial statement basics, key ratios, and cash flow","Lifetime access — revisit any time"],
          priceNow: "$9.99", pricePurple: true, priceWas: "$99", priceSave: "Save 90%",
          urgency: "⏰ This price is available for the next 24 hours only",
          promoLabel: "Use code", promoCode: "GETSTARTED", promoSuffix: "at checkout",
          btnLabel: "🎬 Unlock for $9.99 — 24 hrs only ↗", btnClass: "btn-outline-purple", btnUrlKey: "essentials" },
        { type: "gold", badge: "Best value — 24 hrs", badgeClass: "badge-gold",
          icon: "📊", title: "Analyzing Business Finance — 36 Videos · 4.5 Hours",
          desc: "The complete program. If you want to go from Unaware to fully capable in the shortest time — this is the most direct route. All 7 dimensions including AI in Finance.",
          checks: ["36 video lessons covering all 7 dimensions end to end","4.5 hours of structured, practical content","Includes AI in Finance — tools, prompts, and decision workflows","Lifetime access with future updates"],
          priceNow: "$300", priceGold: true, priceWas: "$500", priceSave: "Save $200",
          urgency: "⏰ Assessment discount — valid for 24 hours only",
          promoLabel: "Use code", promoCode: "FULLPROGRAM", promoSuffix: "at checkout",
          btnLabel: "📊 Enroll for $300 — 24 hrs only ↗", btnClass: "btn-gold", btnUrlKey: "fullProgram" }
      ]
    },
    "Aware": {
      headline: "You see the gaps. Now let's close them — fast.",
      subline: "You know finance matters. You've seen what happens when numbers are ignored. What's missing is a structured framework that turns your awareness into confident, informed decisions. Here are three ways to get there.",
      testimonial: { text: "I would highly recommend Chinmay's program to business owners, C-suite executives and budding entrepreneurs.", attr: "Louise Lucas, CEO, The Property Education Company, Australia" },
      cards: [
        { type: "featured", badge: "Start here", badgeClass: "badge-purple",
          icon: "📖", title: "The Bottomline — Book by Chinmay Ananda",
          desc: "The mental models and storytelling frameworks that make financial thinking click. Read this first — it will make everything else faster to absorb.",
          checks: ["Plain English — no jargon, no prior finance background needed","Decision-making frameworks built into every chapter","Available on Amazon — India and worldwide"],
          btnLabel: "📖 Get the book on Amazon ↗", btnClass: "btn-primary", btnUrlKey: "book",
          priceNow: null },
        { type: "normal",
          icon: "🎬", title: "Business Finance Essentials — 18 Videos · 75 Minutes",
          desc: "Pair this with the book and you'll cover all core financial concepts in under a week. 18 bite-sized lessons, self-paced, lifetime access.",
          checks: ["18 video lessons — all financial statement essentials","75 minutes total — built for busy professionals","Lifetime access on any device"],
          priceNow: "$9.99", pricePurple: true, priceWas: "$99", priceSave: "Save 90%",
          urgency: "⏰ This price is available for the next 24 hours only",
          promoLabel: "Use code", promoCode: "GETSTARTED", promoSuffix: "at checkout",
          btnLabel: "🎬 Unlock for $9.99 — 24 hrs only ↗", btnClass: "btn-outline-purple", btnUrlKey: "essentials" },
        { type: "gold", badge: "Most complete — 24 hrs", badgeClass: "badge-gold",
          icon: "📊", title: "Analyzing Business Finance — 36 Videos · 4.5 Hours",
          desc: "If you want to go from Aware to fully capable — across all 7 dimensions including AI in Finance — this is the most complete path.",
          checks: ["All 7 dimensions — from reading statements to AI in Finance","36 videos · 4.5 hours of structured, practical content","Financial storytelling module — present numbers that move people","Lifetime access with future updates"],
          priceNow: "$300", priceGold: true, priceWas: "$500", priceSave: "Save $200",
          urgency: "⏰ Assessment discount — valid for 24 hours only",
          promoLabel: "Use code", promoCode: "FULLPROGRAM", promoSuffix: "at checkout",
          btnLabel: "📊 Enroll for $300 — 24 hrs only ↗", btnClass: "btn-gold", btnUrlKey: "fullProgram" }
      ]
    },
    "Practitioner": {
      headline: "You have the instincts. Now add the framework.",
      subline: "You're making decisions that work — most of the time. But they're built on experience and gut feel more than structured financial thinking. The professionals who rise fastest at your stage are the ones who systematise what they already know.",
      testimonial: { text: "Chinmay's portrayal of how money should be handled in a business is remarkable. A must-read for financial management.", attr: "Viney Shawney, Finance Professor, Harvard University" },
      cards: [
        { type: "gold", badge: "Recommended for your level", badgeClass: "badge-gold",
          icon: "📊", title: "Analyzing Business Finance — 36 Videos · 4.5 Hours",
          desc: "You're ready for the full program. This is where practitioners become proficient decision-makers — with structured frameworks across all 7 dimensions, including AI-powered finance tools.",
          checks: ["36 videos covering all 7 dimensions of financial decision-making","4.5 hours — structured, practical, self-paced","AI in Finance module — tools, prompts, and decision workflows","Financial storytelling — communicate numbers that move stakeholders","Lifetime access with future updates"],
          priceNow: "$300", priceGold: true, priceWas: "$500", priceSave: "Save $200",
          urgency: "⏰ Assessment discount — valid for 24 hours only",
          promoLabel: "Use code", promoCode: "FULLPROGRAM", promoSuffix: "at checkout",
          btnLabel: "📊 Enroll for $300 — 24 hrs only ↗", btnClass: "btn-gold", btnUrlKey: "fullProgram" },
        { type: "normal",
          icon: "🎬", title: "Business Finance Essentials — 18 Videos · 75 Minutes",
          desc: "Prefer to start smaller? 18 focused lessons covering the core financial essentials — at a price that makes it a very easy yes.",
          checks: ["18 video lessons — core financial essentials","75 minutes total — self-paced, any device","Lifetime access"],
          priceNow: "$9.99", pricePurple: true, priceWas: "$99", priceSave: "Save 90%",
          urgency: "⏰ 24-hour offer only",
          promoLabel: "Use code", promoCode: "GETSTARTED", promoSuffix: "at checkout",
          btnLabel: "🎬 Start with essentials for $9.99 ↗", btnClass: "btn-outline-purple", btnUrlKey: "essentials" },
        { type: "featured",
          icon: "📖", title: "The Bottomline — Book by Chinmay Ananda",
          desc: "A powerful companion to either program. The storytelling frameworks and decision models in the book reinforce everything the videos teach — and it's a reference you'll return to.",
          checks: ["Plain English financial decision-making frameworks","Great companion to the video programs","Available on Amazon — India and worldwide"],
          btnLabel: "📖 Get the book on Amazon ↗", btnClass: "btn-primary", btnUrlKey: "book",
          priceNow: null }
      ]
    },
    "Proficient": {
      headline: "You're good. The question is — are you leading?",
      subline: "You make sound financial decisions and you're comfortable with numbers. But there's a meaningful gap between being financially capable and being the person in the room who shifts the conversation. Financial storytelling and AI integration close that gap.",
      testimonial: { text: "If you have this knowledge, you will have it for life.", attr: "Louise Lucas, CEO, The Property Education Company, Australia" },
      cards: [
        { type: "gold", badge: "Recommended for your level", badgeClass: "badge-gold",
          icon: "📊", title: "Analyzing Business Finance — 36 Videos · 4.5 Hours",
          desc: "At your level, the most valuable modules are Dimension 6 — Financial Storytelling — and Dimension 7 — AI in Finance. These are the two that separate capable professionals from those who set the agenda.",
          checks: ["Advanced financial storytelling — present to boards and CXOs with impact","Full AI in Finance module — build a personal AI-assisted decision process","All 7 dimensions with case studies and decision frameworks","Lifetime access with updates as AI in finance evolves"],
          priceNow: "$300", priceGold: true, priceWas: "$500", priceSave: "Save $200",
          urgency: "⏰ Assessment discount — valid for 24 hours only",
          promoLabel: "Use code", promoCode: "FULLPROGRAM", promoSuffix: "at checkout",
          btnLabel: "📊 Enroll for $300 — 24 hrs only ↗", btnClass: "btn-gold", btnUrlKey: "fullProgram" },
        { type: "featured",
          icon: "📖", title: "The Bottomline — Book by Chinmay Ananda",
          desc: "If you haven't read it, add it now. The storytelling frameworks in the book are a powerful companion to the advanced program modules.",
          checks: ["Advanced storytelling and decision-making frameworks","Ideal companion to the full program","Available on Amazon — India and worldwide"],
          btnLabel: "📖 Get the book on Amazon ↗", btnClass: "btn-primary", btnUrlKey: "book",
          priceNow: null },
        { type: "normal",
          icon: "🎬", title: "Business Finance Essentials — 18 Videos · 75 Minutes",
          desc: "A useful resource to share with colleagues or team members earlier in their financial journey.",
          checks: ["18 core video lessons — great for team sharing","75 minutes total — self-paced","Lifetime access"],
          priceNow: "$9.99", pricePurple: true, priceWas: "$99", priceSave: "Save 90%",
          urgency: "⏰ 24-hour offer only",
          promoLabel: "Use code", promoCode: "GETSTARTED", promoSuffix: "at checkout",
          btnLabel: "🎬 $9.99 — share with your team ↗", btnClass: "btn-outline-purple", btnUrlKey: "essentials" }
      ]
    },
    "Navigator": {
      headline: "You're at the frontier. Let's keep you there.",
      subline: "Your financial intelligence is strong. The edge from here is staying ahead of how AI is reshaping financial decision-making — and sharpening the storytelling that sets the agenda in the most senior rooms.",
      testimonial: { text: "Chinmay's portrayal of how money should be handled in a business is remarkable.", attr: "Viney Shawney, Finance Professor, Harvard University" },
      cards: [
        { type: "gold", badge: "Your level", badgeClass: "badge-gold",
          icon: "📊", title: "Analyzing Business Finance — 36 Videos · 4.5 Hours",
          desc: "You're here for the advanced content — AI-powered scenario planning, boardroom-level financial storytelling, and the Navigator decision model. Plus a framework you can pass on to your team.",
          checks: ["AI integration — build your personal AI-assisted decision process","Boardroom-level financial storytelling — set the agenda, not just attend","The Navigator decision model — human judgment + AI insight","Lifetime access with updates as AI in finance continues to evolve"],
          priceNow: "$300", priceGold: true, priceWas: "$500", priceSave: "Save $200",
          urgency: "⏰ Assessment discount — valid for 24 hours only",
          promoLabel: "Use code", promoCode: "FULLPROGRAM", promoSuffix: "at checkout",
          btnLabel: "📊 Enroll for $300 — 24 hrs only ↗", btnClass: "btn-gold", btnUrlKey: "fullProgram" },
        { type: "featured",
          icon: "📖", title: "The Bottomline — Book by Chinmay Ananda",
          desc: "The storytelling companion to the program. At your level it serves as both a reference and a tool to build financial literacy across your organisation.",
          checks: ["Storytelling and decision frameworks for senior leaders","Ideal team reference resource","Available on Amazon — India and worldwide"],
          btnLabel: "📖 Get the book on Amazon ↗", btnClass: "btn-primary", btnUrlKey: "book",
          priceNow: null },
        { type: "normal",
          icon: "🎬", title: "Business Finance Essentials — 18 Videos · 75 Minutes",
          desc: "At $9.99, this is an easy gift for any team member earlier in their financial journey.",
          checks: ["18 core lessons — perfect for team gifting","75 minutes — self-paced","Lifetime access"],
          priceNow: "$9.99", pricePurple: true, priceWas: "$99", priceSave: "Save 90%",
          urgency: "⏰ 24-hour offer only",
          promoLabel: "Use code", promoCode: "GETSTARTED", promoSuffix: "at checkout",
          btnLabel: "🎬 Share with your team — $9.99 ↗", btnClass: "btn-outline-purple", btnUrlKey: "essentials" },
          {
            type: "normal",
            icon: "🎥",
            title: "Advanced Business Finance (ABF)",
            desc: "Deep-dive program focused on advanced financial strategy, decision-making, and leadership-level insights.",
            checks: [
              "On-demand Vimeo access",
              "Advanced finance frameworks",
              "Self-paced learning"
            ],
            btnLabel: "🎥 Watch on Vimeo ↗",
            btnClass: "btn-outline-purple",
            btnUrlKey: "abf",
            btnUrl: "https://vimeo.com/ondemand/abf"
          },
          {
            type: "normal",
            icon: "🎬",
            title: "Business Finance Essentials 2022",
            desc: "Foundational finance program covering key principles for business leaders and teams.",
            checks: [
              "On-demand Vimeo access",
              "Beginner-friendly finance concepts",
              "Great for team onboarding"
            ],
            btnLabel: "🎬 Watch on Vimeo ↗",
            btnClass: "btn-outline-purple",
            btnUrlKey: "bfe2022",
            btnUrl: "https://vimeo.com/ondemand/bfe2022"
          }
      ]
    }
  };
  

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const {
      pct,
      stage,
      firstName,
      dimScores,
      userEmail,
      userRole
    } = data;

    const tier = TIERS[stage] || TIERS["Unaware"];

    const html = buildEmailHtml({ firstName, pct, stage, dimScores, tier });

    await resend.batch.send([
        // {
        //   from: 'Quiz Tracker <noreply@mg.chinmayananda.com>',
        //   to: ['ca@chinmayananda.com'],
        //   subject: `New Quiz Submission - ${firstName}`,
        //   html: `
        //     <h2>New Quiz Submission</h2>
        //     <p><strong>Name:</strong> ${firstName}</p>
        //     <p><strong>Email:</strong> ${userEmail}</p>
        //     <p><strong>Role:</strong> ${userRole || 'Not specified'}</p>
        //     <hr/>
        //     <p><strong>Score:</strong> ${pct}%</p>
        //     <p><strong>Stage:</strong> ${stage}</p>
        //     <ul>
        //       ${dimScores.map((s, i) => `<li>D${i + 1}: ${s}</li>`).join('')}
        //     </ul>
        //   `
        // },
        {
            from: 'Chinmay <hello@chinmayananda.com>',
            to: [userEmail],
            subject: `${firstName}, your financial score: ${pct}/100`,
            html: `
              ${html}
              <p style="margin-top:20px;">If you have any questions, just reply to this email.</p>
            `
        //   html: `
        //     <h2>Hi ${firstName},</h2>
      
        //     <p>Thanks for taking the quiz!</p>
      
        //     <p><strong>Your Score:</strong> ${pct}%</p>
        //     <p><strong>Your Stage:</strong> ${stage}</p>
      
        //     <h3>Your Breakdown:</h3>
        //     <ul>
        //       ${dimScores.map((s, i) => `<li>Dimension ${i + 1}: ${s}</li>`).join('')}
        //     </ul>
      
        //     <p>We’ll be in touch with next steps.</p>
        //   `
        }
      ]);
      
      
      // ✅ SEND EMAIL TO USER
    //   await resend.emails.send({
    //     from: 'Quiz Team <info@chinmayananda.com>',
    //     to: [userEmail],
    //     subject: `Your Quiz Results`,
    //     html: `
    //       <h2>Hi ${firstName},</h2>
      
    //       <p>Thanks for taking the quiz!</p>
      
    //       <p><strong>Your Score:</strong> ${pct}%</p>
    //       <p><strong>Your Stage:</strong> ${stage}</p>
      
    //       <h3>Your Breakdown:</h3>
    //       <ul>
    //         ${dimScores.map((s, i) => `<li>Dimension ${i + 1}: ${s}</li>`).join('')}
    //       </ul>
      
    //       <p>We’ll be in touch with next steps.</p>
    //     `
    //   });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

function buildEmailHtml({ firstName, pct, stage, dimScores, tier }) {

    const getUrl = (card) => {
      const URLS = {
        book: "https://www.amazon.com/dp/1648997244",
        essentials: "https://mbf.financeacademy.com.au",
        fullProgram: "https://mbf.financeacademy.com.au",
        abf: "https://vimeo.com/ondemand/abf",
        bfe2022: "https://vimeo.com/ondemand/bfe2022"
      };
      return card.btnUrl || URLS[card.btnUrlKey];
    };
  
    // Cards HTML
    const cardsHtml = tier.cards.map(card => {
      const checks = (card.checks || [])
        .map(c => `<li style="margin-bottom:6px;">✓ ${c}</li>`)
        .join('');
  
      const priceBlock = card.priceNow ? `
        <p style="margin:8px 0;">
          <strong style="font-size:18px;">${card.priceNow}</strong>
          <span style="text-decoration:line-through;color:#888;margin-left:8px;">${card.priceWas || ''}</span>
        </p>
        <p style="color:red;font-size:12px;">${card.urgency || ''}</p>
        <p style="background:#f4f4f4;padding:8px;border-radius:6px;font-size:12px;">
          ${card.promoLabel || ''} <strong>${card.promoCode || ''}</strong> ${card.promoSuffix || ''}
        </p>
      ` : '';
  
      return `
        <tr>
          <td style="border:1px solid #eee;padding:16px;margin-bottom:16px;">
            
            ${card.badge ? `<div style="font-size:12px;color:#6b46c1;margin-bottom:6px;">${card.badge}</div>` : ''}
  
            <h3 style="margin:0 0 8px;">
              ${card.icon} ${card.title}
            </h3>
  
            <p style="margin:0 0 10px;color:#555;">
              ${card.desc}
            </p>
  
            ${priceBlock}
  
            <ul style="padding-left:16px;color:#333;">
              ${checks}
            </ul>
  
            <a href="${getUrl(card)}"
               style="display:inline-block;margin-top:10px;padding:10px 14px;background:#000;color:#fff;text-decoration:none;border-radius:6px;">
               ${card.btnLabel}
            </a>
  
          </td>
        </tr>
      `;
    }).join('');
  
    // Breakdown
    const breakdownHtml = dimScores
      .map((s, i) => `<li>Dimension ${i + 1}: ${s}%</li>`)
      .join('');
  
    return `
    <html>
      <body style="font-family:Arial;background:#f6f6f6;padding:20px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
  
              <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;padding:24px;">
  
                <tr>
                  <td align="center">
                    <p style="font-size:12px;color:#888;">
                      CHINMAY ANANDA · FINANCE ACADEMY
                    </p>
  
                    <h2>7-Dimension Financial Assessment</h2>
  
                    <h1 style="font-size:48px;margin:10px 0;">${pct}</h1>
                    <p>out of 100</p>
  
                    <p style="background:#eee;display:inline-block;padding:6px 12px;border-radius:20px;">
                      ${stage}
                    </p>
  
                    <h3>${firstName} — ${tier.headline}</h3>
  
                    <p style="color:#555;">
                      ${tier.subline}
                    </p>
                  </td>
                </tr>
  
                <tr>
                  <td>
                    <h3>Your Breakdown</h3>
                    <ul>
                      ${breakdownHtml}
                    </ul>
                  </td>
                </tr>
  
                ${cardsHtml}
  
                <tr>
                  <td style="padding-top:20px;border-top:1px solid #eee;">
                    <p style="font-style:italic;">
                      "${tier.testimonial.text}"
                    </p>
                    <p style="font-size:12px;color:#666;">
                      — ${tier.testimonial.attr}
                    </p>
                  </td>
                </tr>
  
              </table>
  
            </td>
          </tr>
        </table>
      </body>
    </html>
    `;
  }