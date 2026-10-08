import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full bg-[#15171d] text-white">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-6 pb-8 sm:gap-3 md:flex-row md:items-center">

                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                    <span>FITLOG</span>
                </div>

                <div>
                    <p className="text-[#6B7280]">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;