import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://ubaid.ai">Primary link</Link>
    <Link secondary href="https://ubaid.ai">
      Secondary link
    </Link>
  </StoryContainer>
);
