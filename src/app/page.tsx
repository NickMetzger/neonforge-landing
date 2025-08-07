'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles } from 'lucide-react'
import Navbar from '@/components/navbar'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.from('signups').insert([{ email }])
    setLoading(false)

    if (error) {
      console.error('Signup error:', error)
      setError('Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />
      <section className="relative w-full px-6 pt-24 pb-32 text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight glow-text">
          NeonForge Launches <span className="text-primary">September 2025</span>
        </h1>
        <p className="max-w-xl mx-auto mt-8 text-lg text-muted-foreground">
          Unite around a new Genesis. For creators, seekers, and sovereigns — the Forge awakens. Sign up to join the waitlist and claim your place in the ritual.
        </p>

        {submitted ? (
          <div className="mt-10 text-green-500 text-lg font-medium">
            You’re in. Welcome to the Forge.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-900 border-zinc-700"
            />
            <Button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? 'Summoning...' : 'Join the Waitlist'}
            </Button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-red-500 text-sm font-medium">
            {error}
          </p>
        )}
      </section>
    </main>
  )
}
