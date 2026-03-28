import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.batch.send([
        {
          from: 'Quiz Tracker <noreply@mg.chinmayanda.com>',
          to: ['kapil.webstudiopro@gmail.com'],
          subject: `New Quiz Submission - ${firstName}`,
          html: `
            <h2>New Quiz Submission</h2>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Role:</strong> ${userRole || 'Not specified'}</p>
            <hr/>
            <p><strong>Score:</strong> ${pct}%</p>
            <p><strong>Stage:</strong> ${stage}</p>
            <ul>
              ${dimScores.map((s, i) => `<li>D${i + 1}: ${s}</li>`).join('')}
            </ul>
          `
        },
        {
          from: 'Quiz Team <noreply@mg.chinmayanda.com>',
          to: [userEmail],
          subject: `Your Quiz Results`,
          html: `
            <h2>Hi ${firstName},</h2>
      
            <p>Thanks for taking the quiz!</p>
      
            <p><strong>Your Score:</strong> ${pct}%</p>
            <p><strong>Your Stage:</strong> ${stage}</p>
      
            <h3>Your Breakdown:</h3>
            <ul>
              ${dimScores.map((s, i) => `<li>Dimension ${i + 1}: ${s}</li>`).join('')}
            </ul>
      
            <p>We’ll be in touch with next steps.</p>
          `
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