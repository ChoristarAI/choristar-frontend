import { useCallback, useEffect, useRef, useState } from 'react'

type SizeState = {
  width: number
  height: number
}

export const useElementSize = () => {
  const [size, setSize] = useState<SizeState>({ width: 0, height: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const updateSize = useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setSize({ width, height })
    }
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    updateSize()

    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.unobserve(element)
    }
  }, [updateSize])

  return { ref, size, updateSize }
}
