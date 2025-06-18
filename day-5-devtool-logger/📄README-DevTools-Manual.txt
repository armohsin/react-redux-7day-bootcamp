Redux DevTools Manual - Day 5

🔧 Installation:
1. Install Redux DevTools Extension in Chrome or Firefox.
2. Install redux-logger: 
   npm install redux-logger

🛠️ How to Use DevTools in This Project:
- Launch your app and press F12 (Open DevTools).
- Go to the 'Redux' tab (enabled by the extension).
- You’ll see:
  • Action history (e.g., PLUS, LOGIN)
  • State before/after every action
  • Time travel debug buttons
  • State tree viewer

👀 Console Logs (redux-logger):
- In the browser console, you'll see detailed logs like:
  - prev state
  - action dispatched
  - next state

✅ Use DevTools to:
- Confirm actions are working
- Check reducer behavior
- Debug incorrect logic or typos (like wrong action names)
