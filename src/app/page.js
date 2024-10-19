"use client";
import  { useState } from 'react'
import Image from 'next/image'
import illustration from '../../public/Girl-busy-at-the-workplace.svg'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <div className={darkMode ? 'dark' : ''} >

    <nav class=" shadow fixed z-20 top-0 left-0 w-full dark:bg-[#645452] bg-[#FCF7ED]">
      <div className='flex items-center justify-between mx-auto container px-6 py-4'>
        <p class="text-[#B87333] font-bold text-xl md:text-2xl">Portfolio</p>

        <div class="flex sm:items-center">
          <a href='https://github.com/naralcantara001' className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-4 dark:fill-slate-50"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
          </a>
          <a href='https://www.linkedin.com/in/naralcantara001/' className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-4 dark:fill-slate-50"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
          </a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=naralcantara001@gmail.com' className='cursor-pointer dark:fill-slate-50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 25 25"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
          </a>
        </div>
        {/* darkMode */}
        <button onClick={() => setDarkMode(!darkMode)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='dark:fill-slate-50 fill-black w-[30px]'><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
        </button>

      </div>
    </nav>

    <section className='dark:bg-[#645452] bg-[#FCF7ED]'>
      <div class='container mx-auto px-6 h-auto xl:h-screen flex items-center pt-24 sm:pt-36 xl:pt-0'>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center gap-10 sm:gap-20'>
          <div className='flex flex-col items-start text-gray-700'>
            <div className='font-bold text-2xl flex flex-col'>
              {/* <h2 className='text-xl xl:text-3xl text-[#DFCFB7] font-bold animate-bounce dark:text-slate-300'>Hi! <span className=''>🙋‍♀️</span></h2> */}
              <h2 className='text-3xl xl:text-6xl mt-3 text-gray-700 dark:text-[#DFCFB7]'>Nar Alcantara</h2>
              <div class="w-max flex">
                <span className='text-2xl xl:text-4xl text-gray-700 mr-2 dark:text-[#DFCFB7]'>a</span>
                <span class="animate-typing overflow-hidden whitespace-nowrap text-2xl xl:text-4xl text-[#B87333] p-1">Frontend Web Developer.</span>
              </div>
            </div>

            <div className='flex items-center justify-start flex-row mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px]'><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
              <span className='ml-2 font-semibold text-base dark:text-[#DFCFB7]'>naralcantara001@gmail.com</span>
            </div>
            <div className='flex items-center justify-start flex-row mt-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>
              <span className='ml-2 font-semibold text-base dark:text-[#DFCFB7]'>Imus, Cavite</span>
            </div>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=naralcantara001@gmail.com' className='cursor-pointer'>
            <button className='rounded font-bold text-sm tracking-wide text-white hover:text-[#B87333] hover:bg-[#FCF7ED] border-2 border-[#B87333] hover:border-[#B87333] bg-[#B87333] px-7 py-3 mt-5'>CONTACT ME</button>
            </a>
            
            
          </div>
          <div className='animate-pulse'>
            <Image src={illustration} alt='image'/>
          </div>
        </div>
      </div>
    </section>

          {/* melting */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 325 100"><rect width="100%" height="100%" fill="hsl(0, 0%, 100%)"></rect><g fill="hsl(30, 100%, 40%)">
    <rect width="100%" height="40" fill="hsl(30, 100%, 40%)"></rect>

    <rect x="0" width="7.69%" height="94.37315614755272" rx="15"></rect>
      <rect x="50" width="7.69%" height="81.29608255157426" rx="15"></rect>
      <rect x="100" width="7.69%" height="73.83089949033989" rx="15"></rect>
      <rect x="150" width="7.69%" height="93.54740161315121" rx="15"></rect>
      <rect x="200" width="7.69%" height="79.32744790509024" rx="15"></rect>
      <rect x="250" width="7.69%" height="74.47925792956535" rx="15"></rect>
      <rect x="300" width="7.69%" height="65.13425514466068" rx="15"></rect>
  </g><g fill="hsl(0, 0%, 100%)">
    <rect x="25" y="13.997878381263108" width="7.69%" height="60" rx="15"></rect>
      <rect x="75" y="13.248507640346205" width="7.69%" height="60" rx="15"></rect>
      <rect x="125" y="4.443367748243183" width="7.69%" height="60" rx="15"></rect>
      <rect x="175" y="5.126402215942305" width="7.69%" height="60" rx="15"></rect>
      <rect x="225" y="2.044690481153736" width="7.69%" height="60" rx="15"></rect>
      <rect x="275" y="9.092860188024103" width="7.69%" height="60" rx="15"></rect>
  </g></svg>
    
    <section class='h-auto xl:h-screen flex flex-col items-center pt-36 dark:bg-[#645452] bg-[#FCF7ED]'>
      <h3 className='text-[#B87333] font-bold text-3xl sm:text-4xl'>What I do</h3>
      <div className='container mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10 md:mt-20'>
        
       <div className='border-2 rounded p-1'>
          <div className='flex flex-col content-center justify-center items-center p-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='animate-bounce fill-[#B87333] w-[50px]'><path d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zm3.7-6v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2zM8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zm3.25 1.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zm1.92-3.25A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z"></path></svg>
            <p className='font-bold text-xl mt-1 text-gray-600 dark:text-[#DFCFB7] text-center'>Responsive</p>
            <ul className='list-disc mt-3 text-gray-400 font-bold dark:text-[#DFCFB7]'>
              <li>Optimizing UI responsiveness</li>
              <li>Performance for web and mobile view.</li>
            </ul>
          </div>
        </div>

       <div className='border-2 rounded p-1'>
          <div className='flex flex-col content-center justify-center items-center p-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='animate-bounce fill-[#B87333] w-[50px]'><path d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zm3.7-6v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2zM8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zm3.25 1.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zm1.92-3.25A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z"></path></svg>
            <p className='font-bold text-xl mt-1 text-gray-600 dark:text-[#DFCFB7] text-center'>UI Development</p>
            <ul className='list-disc mt-3 text-gray-400 font-bold dark:text-[#DFCFB7]'>
              <li>Creates web pages from scratch</li>
              <li>Translate mockups and concepts into actual working products taking into UX/UI</li>
            </ul>
          </div>
        </div>
        
        <div className='border-2 rounded p-1'>
          <div className='flex flex-col content-center justify-center items-center p-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='animate-bounce fill-[#B87333] w-[50px]'><path d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zm3.7-6v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2zM8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zm3.25 1.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zm1.92-3.25A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z"></path></svg>
            <p className='font-bold text-xl mt-1 text-gray-600 dark:text-[#DFCFB7] text-center'>UX/UI</p>
            <ul className='list-disc mt-3 text-gray-400 font-bold dark:text-[#DFCFB7]'>
              <li>Design</li>
              <li>Hierarchy</li>
              <li>Typography</li>
              <li>Color Theory</li>
              <li>Layout</li>
            </ul>
          </div>
        </div>

        <div className='border-2 rounded p-1'>
          <div className='flex flex-col content-center justify-center items-center p-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='animate-bounce fill-[#B87333] w-[50px]'><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
            <p className='font-bold text-xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>QA</p>
            <ul className='list-disc mt-3 text-gray-400 font-bold dark:text-[#DFCFB7]'>
              <li>Web and Mobile testing</li>
              <li>Checking bugs and error</li>
              <li>Reporting and documenting</li>
            </ul>
          </div>
        </div>

        
        
      </div>
    </section>

    <section class='h-auto flex flex-col items-center pt-20 dark:bg-[#645452] bg-[#FCF7ED] pb-32'>
      <h3 className='text-[#B87333] font-bold text-3xl sm:text-4xl'>Skills and Tools</h3>

      <div className='container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 sm:gap-10 mt-10 md:mt-20'>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>HTML5</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>CSS3</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Javascript</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Reactjs</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Nextjs</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>REACTNATIVE</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path><circle cx="15.332" cy="12" r="3.332"></circle></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Figma</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Tailwind CSS</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2zm-1.987 13.332c.146.537.13 1.039-.021 1.493l-.054.15a2.803 2.803 0 0 1-.527.821c-.582.633-1.394.872-1.742.671-.375-.219-.188-1.112.487-1.825.726-.765 1.766-1.258 1.766-1.258v-.002l.091-.05zm8.258-9.051c-.452-1.777-3.397-2.362-6.185-1.371-1.656.589-3.453 1.515-4.743 2.723-1.536 1.434-1.78 2.684-1.68 3.206.355 1.843 2.881 3.048 3.92 3.942v.005c-.307.149-2.548 1.274-3.072 2.438-.563 1.225.088 2.101.513 2.212 1.313.363 2.662-.3 3.388-1.374.699-1.051.638-2.4.337-3.063.413-.112.899-.162 1.524-.086 1.751.199 2.101 1.3 2.024 1.75-.074.449-.436.711-.561.786-.126.076-.163.101-.151.151.013.074.076.074.175.063.138-.025.914-.375.951-1.227.037-1.074-.988-2.273-2.813-2.25-.75.014-1.226.076-1.563.214a.295.295 0 0 0-.088-.088c-1.125-1.213-3.213-2.063-3.125-3.675.025-.588.237-2.137 4-4.012 3.088-1.538 5.551-1.112 5.977-.175.61 1.336-1.314 3.825-4.526 4.187-1.225.138-1.862-.337-2.026-.513-.174-.188-.198-.2-.261-.161-.101.05-.038.212 0 .313.1.249.487.688 1.163.912.587.188 2.024.299 3.75-.375 1.937-.749 3.449-2.838 3.012-4.588l.06.056z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Sass</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M18.002 2.997H5.999A3.011 3.011 0 0 0 2.997 6v12.002a3.012 3.012 0 0 0 3.002 3.001h12.003a3.012 3.012 0 0 0 3.001-3.001V6a3.012 3.012 0 0 0-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 0 1-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>Bootstrap5</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315-.146.932-.547 1.7-1.23 2.323-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529 2.06-.186 4.657-.757 6.409-2.35 1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5 21 5.57 19.43 4 17.5 4zm-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5zM7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20zM17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>git-branch</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M12 6c-2.967 0-5.431 2.167-5.909 5H2v2h4.092c.479 2.832 2.942 4.998 5.909 4.998s5.43-2.166 5.909-4.998H22v-2h-4.09c-.478-2.833-2.942-5-5.91-5zm0 9.998c-2.205 0-3.999-1.794-3.999-3.999S9.795 8 12 8c2.206 0 4 1.794 4 3.999s-1.794 3.999-4 3.999z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>git-commit</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M6.01 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.903 2.5 3.337v7.16c-.001.179.027 1.781 1.174 2.931C6.892 19.64 7.84 20 9 20v2l4-3-4-3v2c-1.823 0-1.984-1.534-1.99-2V8.837c1.44-.434 2.5-1.757 2.5-3.337 0-1.93-1.571-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5S5.183 4 6.01 4s1.5.673 1.5 1.5S6.837 7 6.01 7zm13 8.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3 4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337zm-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>git-compare</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744 1.18.844 2.617 1.098 3.918 1.098.966 0 1.853-.14 2.506-.281a3.5 3.5 0 0 0 3.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 0 0-3.404 2.718c-1.297.321-3.664.616-5.119-.426-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5 9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337zm15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5zm-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5zm-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>git-merge</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="M19.01 15.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3 4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337zm-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM9.5 5.5C9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V8.837C8.44 8.403 9.5 7.08 9.5 5.5zm-5 0C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5zm3 13c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>git-pull-request</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>github</p>
          </div>
        </div>

        <div className='border-2 rounded p-1 hover:animate-bounce'>
          <div className='flex flex-col content-center justify-center items-center p-5 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-[#B87333] w-[30px] '><path d="m21.29 4.1-4.12-2a1.36 1.36 0 0 0-.48-.1h-.08a1.18 1.18 0 0 0-.72.24l-.14.12-7.88 7.19L4.44 7a.83.83 0 0 0-.54-.17.88.88 0 0 0-.53.17l-1.1 1a.8.8 0 0 0-.27.61.84.84 0 0 0 .27.62l3 2.71-3 2.72a.84.84 0 0 0 0 1.23l1.1 1a.89.89 0 0 0 .6.22.93.93 0 0 0 .47-.17l3.43-2.61 7.88 7.19a1.2 1.2 0 0 0 .76.36h.17a1 1 0 0 0 .49-.12l4.12-2a1.25 1.25 0 0 0 .71-1.1V5.23a1.26 1.26 0 0 0-.71-1.13zM17 16.47l-6-4.53 6-4.53z"></path></svg>
            <p className='font-bold text-xs mt-1 text-center uppercase text-gray-600 dark:text-[#DFCFB7]'>vscode</p>
          </div>
        </div>
        
      </div>

    </section>


    <section class='dark:bg-[#645452] bg-[#FCF7ED] pb-40'>
      <div className='container mx-auto px-6 h-auto flex flex-col items-center pt-36'>
        <h3 className='text-[#B87333] font-bold text-3xl sm:text-4xl'>Works</h3>

        <div className='grid gap-10 lg:grid-cols-2 md:gap-20 mt-10 md:mt-20'>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Portfolio - Narcy Alcantara (2022)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Personal page</p>     
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>HTML • CSS • Javascript • Reactjs • TailwindCSS</p>
                <a target="_blank" href='https://nar-alcantara.vercel.app/'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Bulletin Board (2022)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Personal project</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>Reactjs • CRUD • SASS</p>
                 <a target="_blank" href='https://github.com/naralcantara001/bulletin-board'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Meme Generator (2022)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Project course by Scrimba 💜</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>Reactjs • SASS • API</p>
                <a target="_blank" href='https://github.com/naralcantara001/meme-generator'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Airbnb landing page (2022)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Project course by Scrimba 💜</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>Reactjs • SASS • API</p>
                 <a target="_blank" href='https://github.com/naralcantara001/airbnb-clone'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Movie Time API (2021)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Personal project</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>HTML • CSS • Javascript • API</p>
                <a target="_blank" href='https://github.com/naralcantara001/movietime-web.github.io'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

          {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Leno Furniture landing page (2021)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Personal project</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>HTML • CSS • Javascript</p>
                <a target="_blank" href='lenofurniture-web.github.io'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>

             {/* item */}
          <div className='grid grid-cols-1 rounded p-1'>
              <div className=' flex justify-center items-center'>
                <Image src={illustration} alt='image' className='rounded'/>
              </div>
              <div className=' flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0'>
                <h3 className='font-bold text-2xl md:text-3xl text-[#B87333]'>Barangay Toclong 1B Web (2021)</h3>
                <p className='font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-[#DFCFB7]'>Main Programmer - Internship</p>        
                <p className='font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-[#DFCFB7]'>HTML • CSS • Javascript</p>
                <a target="_blank" href='https://github.com/naralcantara001/barangaytoclong1b-web.github.io'>
                  <button className='flex flex-row text-white group hover:text-[#B87333] hover:bg-[#FCF7ED] hover:border-[#B87333] border-2  border-[#B87333] bg-[#B87333] font-semibold rounded px-5 py-[10px] mt-6'>           
                    <span className='mr-4'>view github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='fill-white  group-hover:fill-[#B87333] w-[30px] animate-bounce'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                  </button>
                </a>
              </div>
              <br></br>
              <hr></hr>
            </div>
            


          


          </div>

        </div>

    </section>


    <footer className=' bg-gray-100 dark:bg-slate-800 dark:text-[#DFCFB7]'>
      <div className='container mx-auto text-center px-6 py-8 flex flex-col sm:flex-row items-center justify-between'>
      <p>© portfolio - narcy alcantara {new Date().getFullYear()}</p>
      <div class="flex sm:items-center mt-5 sm:mt-0">
          <a href='https://github.com/naralcantara001' className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-4 dark:fill-slate-50"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
          </a>
          <a href='https://www.linkedin.com/in/naralcantara001/' className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-4 dark:fill-slate-50"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
          </a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=naralcantara001@gmail.com' className='cursor-pointer dark:fill-slate-50'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 25 25"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
          </a>
        </div>    
      </div>   
    </footer>

    </div>



    </>
  )
}
