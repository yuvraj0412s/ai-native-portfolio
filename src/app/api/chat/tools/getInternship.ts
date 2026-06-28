import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows a summary of the kind of full-time engineering role I'm looking for, my availability, tech stack, and contact info. Use this tool when the user asks about my job search, whether I'm open to opportunities, or how to hire or contact me.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 💼 **Role**: AI Full-Stack Developer / AI Engineer (Full-Time)
- 📅 **Availability**: Immediately available
- 🌍 **Location**: Gurugram, India · Remote-friendly · Open to relocation
- 🧑‍💻 **Focus**: AI Engineering, Full-Stack Development, SaaS Products, Intelligent Automation
- 🛠️ **Stack**: Python, TypeScript, React, Next.js, FastAPI, Node.js, OpenAI, RAG, CrewAI, PostgreSQL, Redis, Docker
- ✅ **What I bring**: Production AI engineering experience — shipped real SaaS platforms, RAG systems, multi-agent pipelines, and modern full-stack applications that businesses run on every day.
- 🔥 I move fast, learn faster, and I'm HUNGRYYYYY for big challanges

📬 **Reach me at**:
- Email: yuvraj0412s@gmail.com
- LinkedIn: [linkedin.com/in/yuvraj-singh-77601827a](https://linkedin.com/in/yuvraj-singh-77601827a)
- GitHub: [github.com/yuvraj0412s](https://github.com/yuvraj0412s)

Let's build cool shit together ✌️
    `;
  },
});
