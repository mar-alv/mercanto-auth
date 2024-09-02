import clsx from 'clsx'

import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function SsoButton({ children }: Props) {
	return (
		<button
			className={clsx(
				'py-2 px-4 flex justify-center border-2 border-solid border-gray-300 rounded-lg text-gray-500 bg-white',
				'hover:text-red-600 hover:border-red-600',
				'dark:bg-transparent dark:text-gray-100'
			)}
		>
			{children}
		</button>
	)
}
