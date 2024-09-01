import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function SsoButton({ children }: Props) {
	return (
		<button className='py-2 px-4 flex justify-center border-2 border-solid border-gray-300 rounded-lg text-gray-500 bg-white'>
			{children}
		</button>
	)
}
