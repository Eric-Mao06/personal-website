"use client";

import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function Home() {
  const [age, setAge] = useState<string>('0');
  const [expandedImage, setExpandedImage] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2006-06-22T03:00:00');
      const now = new Date();
      const ageInMilliseconds = now.getTime() - birthDate.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      return ageInYears.toFixed(8);
    };

    setAge(calculateAge());
    
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 100); 

    return () => clearInterval(interval);
  }, []);
  return (
    <PageLayout>
      <div className="layout-md text-lg -mt-1">
        <div className="text-left">
          <p className="text-sm text-neutral-500 mb-4">{age} years old</p>
        </div>
        <div className="pt-1">
          <p>
            Currently CEO @ <Link href="https://clado.ai" className="link">Clado</Link>
          </p>
        </div>
        <div className="pt-4">
          <p>
            I previously spent one semester at UPenn M&T studying Computer Science + Business before leaving 
            for the <Link href="https://ycombinator.com" className="link">Y Combinator</Link> X25 Batch.
          </p>
        </div>
        <div className="pt-4">
          <p className="mb-4">Some cool projects:</p>

          <div className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">Serendipity</div>
              <div className="max-w-xs text-right">
                <p>sms based superconnector</p>
              </div>
            </div>
          </div>

          <Link href="https://github.com/Eric-Mao06/AiWantItThatWay" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">AiWantItThatWay <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>generalized monte carlo next action prediction</p>            
              </div>
            </div>
          </Link>

          <Link href="https://berkeley.uselinkd.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">Linkd <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>perfect search over ~300k linkedin profiles</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">5 schools, 120k+ Users</p>
              </div>
            </div>
          </Link>

          <a href="/carbon_credits.pdf" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">Big Data <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>machine learning carbon credit allocation</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">best poster @ ICCC</p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="pt-4">
          <p className="mb-4">Angel investments (friends):</p>


          <Link href="https://shofo.ai" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">shofo <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>ai search over consumer sentiment</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">pre-seed</p>
              </div>
            </div>
          </Link>

          <Link href="https://blueprint.mov" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">blueprint <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>ai ads</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">first check</p>
              </div>
            </div>
          </Link>

          <a href="https://a37.ai" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">a37 <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>cursor for devops</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">seed</p>
              </div>
            </div>
          </a>

        </div>
      </div>

      <div className="layout-md mt-10 mb-2 w-full">
        <div className="flex gap-4 h-80">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                expandedImage === index 
                  ? 'flex-[3]' 
                  : 'flex-[0.5] opacity-80 hover:opacity-100'
              }`}
              onClick={() => setExpandedImage(index)}
            >
              <Image
                src={index === 0 ? "/Photo.png" : index === 1 ? "/Photo2.jpg" : "/Photo3.jpg"}
                alt={index === 0 ? "Eric Mao's profile" : index === 1 ? "Clado team photo" : "Presentation photo"}
                fill
                className="object-cover object-center"
              />
              {expandedImage !== index && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Plus size={24} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
