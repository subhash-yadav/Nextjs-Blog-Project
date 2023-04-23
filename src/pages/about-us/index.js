import React from 'react'

const About = () => {
  return (
    <>
    <div className='container w-full m-auto'>
    <h1 className="text-center text-xl lg:text-3xl font-medium tracking-wide py-5">About US</h1>
        <hr />
      <div className='max-w-2xl m-auto py-10 selection:bg-red-500'>
        <h2 className='text-base lg:text-xl font-medium my-3'>Debugging bugs in React and Next.js applications can be a challenging task, but there are several tools and techniques you can use to make the process easier.</h2>
        <h3 className='text-base lg:text-lg font-medium my-2'>Here are some tips for hunting bugs in React and Next.js:</h3>
        <ul className='list-decimal text-sm lg:text-base font-normal'>
          <li className='py-1'>Use console.log() statements: Console logging is a simple and effective way to debug your code. By logging variables and values to the console, you can get a better understanding of what's happening in your code at a specific point in time.</li>
          <li className='py-1'>Use the React DevTools: The React DevTools is a browser extension that allows you to inspect and debug React components. It provides a visual representation of your component hierarchy and lets you inspect props and state, as well as modify them on the fly.</li>
          <li className='py-1'>Check the browser console for error messages: If your code is not working as expected, there may be an error message in the browser console that can help you diagnose the problem. Check for any red error messages and investigate them further.</li>
          <li className='py-1'>Use the debugger statement: The debugger statement is a built-in JavaScript function that allows you to pause the execution of your code and inspect variables and values at a specific point in time. Simply add the statement where you want to pause your code, and open the browser console to start debugging.</li>
          <li className='py-1'>Simplify your code: If you're having trouble pinpointing the source of a bug, try simplifying your code by removing unnecessary components or code snippets. This can help you isolate the problem and make it easier to find a solution.</li>
          <li className='py-1'>Ask for help: If you're still having trouble debugging your code, don't hesitate to ask for help. Reach out to other developers in online forums, chat rooms, or social media platforms for assistance.</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default About