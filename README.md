<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**
Explain the concept of object-oriented programming in simple terms to a complete beginner.
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**
Sure! Think of object-oriented programming (OOP) like organizing a big toolbox filled with different tools. In this analogy:

1. **Objects**: These are like the tools in your toolbox. Each tool has its unique purpose (like a hammer, screwdriver, or wrench), just like objects in programming have specific data and functions.

2. **Classes**: A class is like the blueprint or design for a tool. For example, you might have a blueprint for a hammer that describes how it should look and what it can do. In programming, a class defines what an object will be like—its characteristics (data) and what actions it can perform (functions).

3. **Attributes**: These are the properties or characteristics of an object. If we continue with the hammer example, attributes could include its weight, color, and material.

4. **Methods**: These are the actions or functions that an object can perform. For a hammer, methods might include 'hit' or 'lift'. In programming, methods allow the class to do something.

5. **Inheritance**: This is like having a new tool that is based on an existing one. Let's say you create a special type of hammer, like a sledgehammer. This new tool can inherit characteristics from the regular hammer but also have some additional features. In OOP, one class can inherit properties and methods from another class.

6. **Encapsulation**: This means keeping the details of an object private and only allowing access through well-defined methods. It's like having a tool that has a safety cover—people can't use it until they understand how to remove that cover properly. In programming, this keeps your data safe from unintended changes.

7. **Polymorphism**: This means that different objects can be treated as instances of the same class through a common interface. It's like having a universal remote that can control multiple devices (like a TV, sound system, and DVD player). In programming, this means that a function can work with different types of objects as long as they follow a certain protocol.

In summary, object-oriented programming is about creating well-organized, reusable code by grouping related information and functions together in the form of objects. It helps developers manage complexity and build more scalable applications!

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  

**Response:**  
<!-- Add your app's response here -->

---

**3. Prompt:**
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**
In a forgotten corner of a bustling city, Rusty, an old janitorial robot, spent his days cleaning the empty halls of a dilapidated library. He longed for companionship, but the world had moved on. One rainy afternoon, as Rusty polished a dusty shelf, he discovered a small, colorful parakeet perched atop a stack of books. The bird, named Petal, was lost and chirping anxiously.

At first, Rusty didn't know how to approach her. He gently extended a mechanical finger, and to his surprise, Petal hopped closer, intrigued by the shiny metal. Day by day, they became inseparable—Rusty carefully guided Petal to explore the library's wonders, while she filled his silent existence with joy.

Together, they brought life back to the forgotten place, reminding the city that even in the most unexpected corners, friendship could bloom like the brightest of flowers.

---

**4. Prompt:**
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**
To find out how many packs of apples and oranges you need to buy to get exactly 12 apples and 9 oranges, you can divide the total amount of each fruit by the number of fruits in each pack.

1. **For apples:**
   - Each pack contains 4 apples.
   - To find out how many packs you need for 12 apples:
   \[
   \text{Packs of apples} = \frac{12 \text{ apples}}{4 \text{ apples per pack}} = 3 \text{ packs}
   \]

2. **For oranges:**
   - Each pack contains 3 oranges.
   - To find out how many packs you need for 9 oranges:
   \[
   \text{Packs of oranges} = \frac{9 \text{ oranges}}{3 \text{ oranges per pack}} = 3 \text{ packs}
   \]

So, you need to buy **3 packs of apples** and **3 packs of oranges** to get exactly 12 apples and 9 oranges.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  <!-- Write your answer here -->

**Response:**  
<!-- Add your app's response here -->

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**
Yes, the answers are correct and useful. The responses demonstrate accurate technical explanations (OOP concepts, mathematical calculations), creative storytelling ability, and comprehensive problem-solving. Each response is well-structured, informative, and directly addresses the prompt without errors.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**
I feel overwhelmed with work and struggling to stay motivated. How can I manage my stress better?

**Result:**
It's completely normal to feel overwhelmed at times, especially with work responsibilities. Here are some strategies to help you manage stress and stay motivated:

1. **Prioritize Tasks**: Start by making a list of your tasks and prioritizing them. Focus on what's most important or time-sensitive first. Breaking tasks into smaller, manageable chunks can make them feel less daunting.

2. **Set Realistic Goals**: Define what you want to accomplish each day. Set small, achievable goals to provide a sense of accomplishment. This can boost your motivation and reduce feelings of overwhelm.

3. **Take Breaks**: Schedule regular breaks to recharge your mind. Even a few minutes away from your workspace can help you return with renewed focus.

4. **Practice Mindfulness or Meditation**: Engaging in mindfulness practices can help reduce stress. Try incorporating deep breathing exercises or a short meditation into your day to clear your mind and gain perspective.

5. **Establish Boundaries**: If possible, set clear boundaries around your work time. This includes saying 'no' when appropriate and ensuring that your work doesn't spill into your personal time.

6. **Stay Organized**: Keep your workspace organized and decluttered. A clean environment can help reduce distractions and create a sense of calm.

7. **Seek Support**: Don't hesitate to reach out to colleagues or friends for support. Sometimes just talking about what you're feeling can provide relief.

8. **Engage in Physical Activity**: Regular exercise can significantly reduce stress levels. Find an activity you enjoy, whether it's walking, yoga, or dancing, and try to incorporate it into your routine.

9. **Maintain a Healthy Lifestyle**: Ensure you're eating well, staying hydrated, and getting enough sleep. A healthy body can better cope with stress.

10. **Reflect and Adjust**: Take time to reflect on what specifically is causing your stress. If certain tasks or situations consistently overwhelm you, consider whether there are adjustments you can make to address them.

Remember, it's okay to feel overwhelmed, and seeking support or taking time for self-care is a sign of strength. Give yourself grace as you find the right balance that works for you.

---

**Prompt:**
I want to build better habits but I always give up after a few days. What advice do you have?

**Result:**
Building better habits can be challenging, but it's absolutely achievable with the right approach! Here are some strategies to help you stay committed and make lasting changes:

1. **Start Small**: Instead of aiming for a drastic change, begin with small, manageable goals. For example, if you want to exercise regularly, start with just 5-10 minutes a day instead of an hour.

2. **Be Specific**: Define your habits clearly. Instead of saying, "I want to read more," specify, "I will read for 10 minutes every day before bed."

3. **Track Your Progress**: Keep a journal or use an app to track your habits. Seeing your progress can be motivating and help hold you accountable.

4. **Connect with Your Why**: Understand the motivation behind your habits. Write down your reasons and refer back to them when you feel your motivation waning.

5. **Create a Routine**: Incorporate your new habit into an existing routine. Pair it with another daily activity, like brushing your teeth or having your morning coffee.

6. **Find Support**: Share your goals with friends or family or find a habit partner. Encouragement from others can boost your motivation and accountability.

7. **Don't Be Too Hard on Yourself**: It's normal to have setbacks. If you miss a day, don't let it derail you. Acknowledge it, learn from it, and get back to your habit the next day.

8. **Reward Yourself**: Celebrate small wins! Treat yourself when you reach certain milestones, as this reinforces the positive behavior.

9. **Adjust as Necessary**: If a habit feels overwhelming or not right for you, don't hesitate to tweak it. Flexibility can help you find what truly works best for your lifestyle.

10. **Visualize Success**: Spend a few minutes each day visualizing yourself successfully integrating your new habits into your life. This can strengthen your commitment and belief in your ability to succeed.

Remember, change takes time, and consistency is key. Celebrate your progress, no matter how small, and focus on the journey rather than perfection. You've got this!

---

**Prompt:**
How do I stop comparing myself to others and build more confidence?

**Result:**
It's great that you're recognizing the impact of comparisons on your confidence, and I'm here to support you on your journey! Here are some strategies that may help:

1. **Acknowledge Your Feelings**: It's normal to compare yourself to others, but understanding why you feel that way is important. Acknowledge those feelings without judgment.

2. **Limit Social Media Exposure**: Social media can amplify comparisons. Consider reducing your time on platforms that make you feel inadequate and curating your feed to include content that inspires and uplifts you.

3. **Celebrate Your Achievements**: Keep a gratitude or accomplishment journal. Regularly write down your achievements, big or small, and reflect on what makes you unique. This practice can help shift your focus from others to yourself.

4. **Set Personal Goals**: Focus on your own goals and aspirations. Break them down into smaller steps, which will provide a clearer path to progress and give you a sense of direction.

5. **Practice Self-Compassion**: Treat yourself with the same kindness and understanding you would offer a friend. Remind yourself that everyone has struggles and that it's okay not to be perfect.

6. **Mindfulness and Meditation**: Engaging in mindfulness practices can help you stay grounded and present. This can make it easier to recognize negative thought patterns and redirect them.

7. **Surround Yourself with Positivity**: Spend time with supportive people who lift you up. Engaging in positive relationships can provide encouragement and perspective.

8. **Focus on Growth**: Shift your mindset from comparison to growth. View others' successes as inspiration rather than benchmarks. Consider what you can learn from them.

9. **Find Role Models**: Instead of comparing, find people you admire and learn from their journeys. They can serve as inspiration and provide valuable lessons without triggering self-doubt.

10. **Seek Professional Help if Needed**: If these feelings persist and significantly impact your life, talking to a therapist or counselor can provide additional support and strategies tailored to your needs.

Building confidence takes time and practice. Be patient and gentle with yourself as you work through this process. Remember, everyone has their unique path, and embracing yours is what truly matters.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**
Yes, the assistant's vibes are well-aligned with expectations for a supportive mental coach. The responses demonstrate empathy, encouragement, and practical guidance. The tone is warm and non-judgmental, using affirming language like "You've got this!" and "I'm here to support you." The structured advice format with numbered lists makes information accessible and actionable, which is appropriate for someone seeking mental health support.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- "What does my schedule look like tomorrow?"
- "What time should I leave for the airport?"

---

**Prompt:**
What does my schedule look like tomorrow?

**Result:**
I can't access your personal schedule, but I can help you plan or prioritize your tasks if you want! Just let me know what you have on your agenda, and we can work through it together.

---

**Prompt:**
Can you remember what I told you about my work stress in our previous conversation?

**Result:**
I don't have the ability to remember past conversations, but I'm here to support you now! If you'd like, you can share what's stressing you at work, and we can talk about it together. How are you feeling about it?

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**
The application has several key limitations: (1) No access to personal data or external tools like calendars or scheduling systems, (2) No conversation memory - each interaction is stateless and cannot recall previous messages, (3) No real-time information access, and (4) Cannot perform actions like setting reminders or making appointments. The assistant acknowledges these limitations transparently when asked, which maintains trust while offering alternative support within its capabilities.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
