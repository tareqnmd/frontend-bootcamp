import Link from 'next/link';
const AppLogo = () => {
	return (
		<Link
			className="text-xl font-bold"
			href="/"
		>
			<svg
				viewBox="0 0 87 57"
				className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
			>
				<path
					className="fill-dark dark:fill-light"
					d="M0.603125 57V54.36C2.62979 54.2533 4.01646 53.8 4.76313 53C5.50979 52.1467 5.90979 51 5.96313 49.56C6.06979 48.0667 6.12313 46.3867 6.12313 44.52V9.96C6.12313 8.89333 6.14979 7.88 6.20312 6.92C6.25646 5.90666 6.30979 5 6.36313 4.2C5.40313 4.25333 4.44313 4.30666 3.48313 4.36C2.52313 4.41333 1.56313 4.46667 0.603125 4.52V0.999996H37.7231L38.1231 15H35.4831C35.4831 11.8533 34.9765 9.48 33.9631 7.88C32.9498 6.22666 31.6165 5.13333 29.9631 4.6C28.3098 4.01333 26.4698 3.74667 24.4431 3.8L18.6031 3.96C16.6298 4.01333 15.2698 4.49333 14.5231 5.4C13.7765 6.25333 13.3498 7.4 13.2431 8.84C13.1365 10.28 13.0831 11.9333 13.0831 13.8V27.56L27.0031 27.64L26.4431 20.68H29.9631V37.56H27.4031C27.4031 35.16 27.0565 33.4533 26.3631 32.44C25.7231 31.4267 24.7098 30.8133 23.3231 30.6C21.9365 30.3867 20.1231 30.3333 17.8831 30.44L13.0831 30.68V47.48C13.0831 48.92 13.0565 50.1733 13.0031 51.24C13.0031 52.2533 12.9498 53.1067 12.8431 53.8C13.7498 53.7467 14.6565 53.72 15.5631 53.72C16.4698 53.6667 17.3765 53.6133 18.2831 53.56C19.1898 53.5067 20.0965 53.48 21.0031 53.48V57H0.603125ZM44.4313 57V54.36C46.4579 54.3067 47.8446 53.8533 48.5913 53C49.3379 52.0933 49.7379 50.8933 49.7913 49.4C49.8979 47.8533 49.9513 46.0933 49.9513 44.12V10.52C49.9513 9.08 49.9779 7.85333 50.0312 6.84C50.0846 5.77333 50.1379 4.89333 50.1913 4.2C49.2313 4.25333 48.2713 4.30666 47.3113 4.36C46.3513 4.41333 45.3913 4.46667 44.4313 4.52V0.999996C47.3646 0.946664 50.2979 0.919997 53.2313 0.919997C56.2179 0.866665 59.3113 0.839998 62.5113 0.839998C68.6979 0.839998 73.5246 1.93333 76.9913 4.12C80.5113 6.30667 82.2179 9.77333 82.1113 14.52C82.1113 16.2267 81.6046 17.9333 80.5913 19.64C79.6313 21.3467 78.1646 22.8667 76.1913 24.2C74.2713 25.48 71.8446 26.3867 68.9113 26.92V27.08C74.7779 27.08 79.2046 28.44 82.1913 31.16C85.1779 33.8267 86.6713 37.2133 86.6713 41.32C86.6713 44.5733 85.8446 47.3733 84.1913 49.72C82.5379 52.0667 80.2979 53.88 77.4713 55.16C74.6446 56.3867 71.4179 57 67.7913 57H44.4313ZM56.6713 53.8C57.5246 53.8533 58.5379 53.9067 59.7113 53.96C60.9379 53.96 62.0579 53.96 63.0713 53.96C64.1379 53.96 64.8313 53.96 65.1513 53.96C69.2579 53.96 72.5646 52.9467 75.0713 50.92C77.6313 48.84 78.9113 45.8 78.9113 41.8C78.9113 38.5467 78.2713 36.0133 76.9913 34.2C75.7113 32.3867 74.0313 31.1067 71.9513 30.36C69.8713 29.6133 67.6046 29.24 65.1513 29.24C63.5513 29.24 62.0846 29.2667 60.7513 29.32C59.4713 29.32 58.1913 29.3733 56.9113 29.48V47.56C56.9113 49 56.8846 50.2267 56.8313 51.24C56.8313 52.2533 56.7779 53.1067 56.6713 53.8ZM56.9113 26.36L62.7513 26.2C65.7913 26.1467 68.1913 25.5333 69.9513 24.36C71.7113 23.1333 72.9646 21.6133 73.7113 19.8C74.5113 17.9867 74.8846 16.0933 74.8313 14.12C74.7779 11.24 74.1113 9.05333 72.8313 7.56C71.6046 6.06666 70.0846 5.05333 68.2713 4.52C66.4579 3.98667 64.6713 3.72 62.9113 3.72C61.1513 3.72 59.8446 3.96 58.9913 4.44C58.1379 4.92 57.5779 5.72 57.3113 6.84C57.0446 7.96 56.9113 9.50667 56.9113 11.48V26.36Z"
				/>
			</svg>
		</Link>
	);
};

export default AppLogo;
