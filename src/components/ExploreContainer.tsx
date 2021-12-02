import './ExploreContainer.css';
import { Capacitor } from '@capacitor/core'

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const ciTrigger = process.env.REACT_API_CI_TRIGGER || 'Ionic CLI';
  const platform = Capacitor.getPlatform();

  const binaryType = platform === 'ios' ? 'IPA' : platform === 'android' ? 'APK' : 'website'
  return (
    <div className="container">
      <strong>This {binaryType} was built by Appflow</strong>
      {ciTrigger && (
        <p>Triggered by +{ciTrigger}
          <br/>

        </p>
      )}
    </div>
  );
};

export default ExploreContainer;
