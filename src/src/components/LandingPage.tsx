import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. 히어로 섹션 (첫 화면) */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>새로운 O.HOME을 만나보세요</span>
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          더 스마트하고 깔끔하게 <br className="hidden sm:inline" />
          <span className="text-indigo-600">나만의 홈을 완성하는 공간</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          복잡한 세팅 없이 한눈에 들어오는 인터페이스. 원하는 콘텐츠와 이미지를 
          가장 깔끔한 레이아웃으로 전달해 보세요.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-all"
          >
            둘러보기 <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all"
          >
            소개 보기
          </a>
        </div>

        {/* 히어로 대표 이미지 박스 */}
        <div className="mt-12 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
            alt="메인 이미지"
            className="h-[350px] sm:h-[500px] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* 2. 핵심 기능 / 특장점 섹션 (스크롤 영역 1) */}
      <section id="features" className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              어떤 점이 특별할까요?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              필요한 기능만 담아 스크롤 하나만으로 편리하게 다룰 수 있습니다.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">빠른 반응속도</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                가볍고 최적화된 컴포넌트로 제작되어 접속과 화면 전환이 쾌적합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">안정적인 그리드</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                모바일, 태블릿, PC 등 어떤 디바이스에서도 깨지지 않고 정렬됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">쉬운 커스텀</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                원하는 사진과 텍스트만 교체하면 금방 근사한 웹페이지가 완성됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 좌우 번갈아 나오는 상세 소개 섹션 (스크롤 영역 2) */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* 이미지 오른쪽 배치 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">디자인 가이드</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                사진과 텍스트의 조화로운 배치
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                답답해 보이지 않도록 적절한 여백과 그리드를 활용했습니다. 글에 시선이 자연스럽게 머무를 수 있도록 포인트 색상을 지정했습니다.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="디자인 작업 화면"
                className="w-full object-cover h-[350px]"
              />
            </div>
          </div>

          {/* 이미지 왼쪽 배치 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">반응형 대응</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                어디서나 깔끔하게 보이는 스크롤
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                화면 크기가 커지거나 줄어들어도 콘텐츠 비율이 망가지지 않고 자동으로 세로 배치가 이루어집니다.
              </p>
            </div>
            <div className="lg:col-start-1 overflow-hidden rounded-2xl shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="개발 화면"
                className="w-full object-cover h-[350px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. 하단 푸터 (Footer) */}
      <footer className="border-t border-slate-200 bg-white py-12 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} O.HOME. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}