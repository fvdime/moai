import Image from 'next/image'
import React from 'react'
import CommentSection from './comment-section'

const PostContent = () => {
  return (
    <div>
      <main className="antialiased">
        <div className="flex justify-between text-white">
          <article className="w-full format format-sm sm:format-base lg:format-lg format-blue format-invert bg-zinc-900 rounded leading-1.5 p-4 border border-zinc-700">
              <div className="mb-4 lg:mb-6 not-format">
                <address className="flex flex-row w-full justify-between items-center mb-6 not-italic">
                  <div className='flex flex-row justify-center items-center gap-4'>
                    <Image
                      src="/1.jpg"
                      alt='user photo'
                      height={32}
                      width={32}
                      className='w-8 h-8 rounded-full object-cover object-center'
                    />
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold">
                        <span className="text-white">t/topic name</span>
                        <span className="text-zinc-400"> - username</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-normal text-zinc-400">11:46</span>
                </address>
                <h1 className="mb-4 text-xl font-extrabold leading-tight lg:mb-6 lg:text-2xl text-white">Best practices for successful prototypes</h1>
                </div>
                <div className='text-sm'>
                    <p>Flowbite is an open-source library of UI components built with the utility-first
                        classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                        datepickers.</p>
                    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                        you can think things through before committing to an actual design project.</p>
                    <p>It comes with the most commonly used UI components, such as buttons, navigation
                        bars, cards, form elements, and more which are conveniently built with the utility classNamees from
                        Tailwind CSS.</p>
                    <h2>Getting started with Flowbite</h2>
                    <p>First of all you need to understand how Flowbite works. This library is not another framework.
                        Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                        documentation.</p>
                    <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                        and datepickers which you can optionally include into your project via CDN or NPM.</p>
                    <h2>When does design come in handy?</h2>
                    <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                        will come in handy:</p>
                    <ol>
                        <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                            follow your intended user journey and buy something from the site you’ve designed? By running a
                            usability test, you’ll be able to see how users will interact with your design once it’s live;
                        </li>
                        <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                            properly? Pass your prototype to your data protection team and they can test it for real;</li>
                        <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                            providing your client with a hands-on experience;</li>
                        <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                            design elements, designers and developers can understand each other — and the project — better.
                        </li>
                    </ol>
                    <h3>Laying the groundwork for best design</h3>
                    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                        you can think things through before committing to an actual design project.</p>
                    <p>Let start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                    <h3>Understanding typography</h3>
                    <h4>Type properties</h4>
                    <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                        letters. A typeface represents shared patterns across a collection of letters.</p>
                </div>
            </article>
        </div>
        <CommentSection/>
      </main>
    </div>
  )
}

export default PostContent