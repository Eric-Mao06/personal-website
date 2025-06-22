"use client";

import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [age, setAge] = useState<string>('0');

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
            I am currently increasing the serendipity of the world @ <Link href="https://clado.ai" className="link">Clado</Link>
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

          <Link href="https://waterloo.uselinkd.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">Serendipity <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>sms based superconnector</p>
              </div>
            </div>
          </Link>

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
            <div className="flex justify-between py-3 border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
              <div className="font-medium text-black flex items-center whitespace-nowrap mr-4">Big Data <ArrowUpRight className="ml-1" size={16} /></div>
              <div className="max-w-xs text-right">
                <p>machine learning carbon credit allocation</p>
                <p className="text-sm text-neutral-500 mt-1 text-right">best poster @ ICCC</p>
              </div>
            </div>
          </a>

          <div className="border-t border-neutral-200 pt-4 mt-2">
            <h3 className="font-medium text-black mb-3">Ship to Yap Ratio:</h3>
            <div className="w-full overflow-x-auto">
              <img 
                src="https://ghchart.rshah.org/Eric-Mao06" 
                alt="Eric-Mao06's Github contribution chart" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="layout-md mt-10 mb-2 w-full">
        <Image
          src="/Photo.png"
          alt="Eric Mao's profile"
          width={1200}
          height={800}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </PageLayout>
  );
}
