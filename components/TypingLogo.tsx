'use client'

import { useState, useEffect } from 'react'

export const TypingPrompt = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Prabhat'

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
      <span className="text-primary-500">$</span> {text}
      <span
        className={`ml-1 inline-block h-5 w-2 bg-primary-500 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export const TypingCode = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'prabhat'

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
      <span className="text-primary-500">{'<'}</span>
      {text}
      <span className="text-primary-500">{'>'}</span>
      <span
        className={`ml-1 inline-block h-5 w-0.5 bg-primary-500 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export const TypingTerminal = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'iprabhat.dev'

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg font-semibold">
      <span className="text-gray-500 dark:text-gray-400">~/</span>
      <span className="text-gray-900 dark:text-gray-100">{text}</span>
      <span
        className={`ml-1 inline-block h-5 w-2 bg-primary-400 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export const TypingCycle = () => {
  const texts = ['prabhat', 'developer', 'blogger', 'engineer']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = texts[currentIndex]

    if (!isDeleting && text.length < currentText.length) {
      const timeout = setTimeout(() => {
        setText(currentText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && text.length === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && text.length > 0) {
      const timeout = setTimeout(() => {
        setText(text.slice(0, -1))
      }, 50)
      return () => clearTimeout(timeout)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }
  }, [text, isDeleting, currentIndex, texts])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
      <span className="text-primary-500"> &gt;</span> {text}
      <span
        className={`ml-1 inline-block h-5 w-0.5 bg-primary-500 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export const TypingSimple = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'prabhat'

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 130)
      return () => clearTimeout(timeout)
    }
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
      {text}
      <span className={`font-mono ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
    </div>
  )
}
