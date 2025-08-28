import { useState } from 'react';
import BasicButton from '@/shared/components/atoms/BasicButton';
import BasicInput from '@/shared/components/atoms/BasicInput';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white">
      <h1 className="text-6xl font-extrabold text-yellow-400 mb-14 tracking-tight" style={{letterSpacing: '0.04em'}}>LANDAS</h1>
      <form className="w-full max-w-xl flex flex-col gap-5">
        <label className="text-lg font-medium mb-1" htmlFor="login-id">아이디</label>
        <BasicInput
          id="login-id"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={e => setId(e.target.value)}
          className="bg-gray-50 border-none focus:ring-2 focus:ring-yellow-300 w-full rounded-xl h-14 text-lg px-6"
        />
        <label className="text-lg font-medium mt-2 mb-1" htmlFor="login-password">비밀번호</label>
        <div className="relative">
          <BasicInput
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-gray-50 border-none focus:ring-2 focus:ring-yellow-300 w-full rounded-xl h-14 text-lg px-6 pr-12"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
            {/* Eye icon placeholder */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 mb-2 gap-2">
          <label className="flex items-center gap-2 text-base font-medium">
            <input
              type="checkbox"
              checked={saveId}
              onChange={e => setSaveId(e.target.checked)}
              className="accent-yellow-400 w-5 h-5"
            />
            아이디 저장
          </label>
          <div className="text-base text-black font-medium flex gap-2">
            <span className="cursor-pointer">아이디찾기</span>
            <span>|</span>
            <span className="cursor-pointer">비밀번호 찾기</span>
          </div>
        </div>
        <BasicButton
          variant="primary"
          size="lg"
          disabled
          fullWidth
          className="mb-3 bg-gray-200 text-gray-400 border-none hover:opacity-100 cursor-not-allowed rounded-xl h-16 text-xl font-bold"
        >
          로그인
        </BasicButton>
        <BasicButton
          variant="outline"
          size="lg"
          fullWidth
          className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-xl h-16 text-xl font-bold"
        >
          회원가입
        </BasicButton>
      </form>
    </div>
  );
}
