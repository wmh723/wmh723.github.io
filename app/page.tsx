import Image from 'next/image'
import Link from '@/components/Link'

export default function Home() {
  return (
    <div className="relative -mt-6 flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden">
      {/* 背景圖片 */}
      <Image
        src="/static/images/daysky.jpg"   // ← 改成你的圖片路徑
        alt="Homepage background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 半透明遮罩（讓文字更清楚，可依喜好調整透明度） */}
      <div className="absolute inset-0 bg-black/15" />

      {/* 置中大字 */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Havey Homepage
        </h1>
        <p className="mb-8 text-lg sm:text-xl md:text-2xl opacity-90">
          Welecom to my homepage!
        </p>

        {/* 可選按鈕 */}
        <Link
          href="/blog"
          className="inline-block rounded-lg bg-white/90 px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-white"
        >
          查看文章 →
        </Link>
      </div>
    </div>
  )
}
