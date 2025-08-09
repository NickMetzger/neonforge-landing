'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar'
const DISCORD_URL =
  process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/zPsS4C4t';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('signups')
      .insert([{ email }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />
      <div className="relative w-full px-6 pt-24 pb-32 text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl text-white glow font-bold tracking-tight glow-text">
          NeonForge Launches <span className="text-white glow">September 2025</span>
        </h1>
        <p className="max-w-xl mx-auto mt-8 text-lg text-muted-foreground">
          Enter your email to get notified first and secure early access.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex justify-center gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="you@lorekeeper.io"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={submitted}>
            {submitted ? 'Submitted!' : 'Notify Me'}
          </Button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeonForge Network
          </p>
          <div className="flex items-center gap-4">
           <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
               Join us on Discord
            </a>
            </div>
            </div>
            </footer>
    </main>
  );
}
