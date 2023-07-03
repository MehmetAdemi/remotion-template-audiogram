import { staticFile } from 'remotion';
import { Composition } from 'remotion';
import { AudioGramSchema, AudiogramComposition } from './Composition';
import './style.css';

const fps = 30;
const durationInFrames = 29.5 * fps;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Audiogram"
				component={AudiogramComposition}
				durationInFrames={durationInFrames}
				fps={fps}
				width={1080}
				height={1080}
				schema={AudioGramSchema}
				defaultProps={{
					titleText:
						'#234 – Money, Kids, and Choosing Your Market with Justin Jackson of Transistor.fm',
					titleColor: 'rgba(251, 176, 14, 0.93)',
					waveColor: 'rgba(251, 176, 14, 0.93)',
					transcriptionColor: 'rgba(255, 255, 255, 0.93)',
					audioOffsetInFrames: 207,
					source: staticFile('subtitles.srt'),
					durationInSeconds: 28,
				}}
				calculateMetadata={async ({ props }) => {
					return {
						durationInFrames: props.durationInSeconds * fps,
						props,
					};
				}}
			/>
		</>
	);
};
