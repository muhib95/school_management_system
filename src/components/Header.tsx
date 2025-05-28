import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 text-black text-xs'>
         {/* Search BAR    */}
         <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2 bg-white'>
            <Image src='/search.png' alt='search' width={14} height={14}></Image>
            <input type="text" placeholder='Search' className='w-[200px] p-2 bg-transparent outline-none text-gray-500'/>
         </div>
         {/* Icon and user */}
         <div className='flex items-center justify-end w-full gap-6'>
            <div className='w-7 h-7 bg-white rounded-full flex justify-center items-center'>
                <Image src='/message.png' alt='message' width={14} height={14}></Image>
            </div>
            <div className='w-7 h-7 bg-white rounded-full flex justify-center items-center relative'>
                <Image src='/announcement.png' alt='message' width={14} height={14}></Image>
                <div className='w-5 h-5 flex justify-center items-center bg-purple-500 absolute -top-3 -right-3 rounded-full text-xs'>
                    1
                </div>
            </div>
            <div className='flex flex-col'>
                <span>
                    Muhib
                </span>
                 <span>
                    Admin
                </span>

            </div>
            <Image src='/avatar.png' alt='avatar' width={36} height={36} className='rounded-full'></Image>

         </div>
        </div>
    );
};

export default Header;