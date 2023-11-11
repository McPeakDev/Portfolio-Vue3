import Resume from '../pdfs/01_Matthew_McPeak_Software_Engineer.pdf'

const handleLink = (type: string) => {
	switch (type) {
		case 'mail':
			window.location.href = 'mailto:m.mcpeak98@icloud.com'
			break
		case 'github':
			window.open('https://github.com/McPeakDev')
			break
		case 'linkedin':
			window.open('https://www.linkedin.com/in/matthewmcpeak')
			break
		case 'terratax':
			window.open('https://www.bisonline.com/project/terra/')
			break
		case 'vtrs':
			window.open('https://www.bisonline.com/state-solutions/')
			break
		case 'inventory':
			window.open('https://www.bisonline.com/state-solutions/')
			break
		case 'kiosk':
			window.open('https://www.bisonline.com/bis-kiosk/')
			break
		case 'resume':
			window.open(Resume)
			break
	}
}

export { handleLink }
