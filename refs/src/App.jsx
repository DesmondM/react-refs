import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Level2" targetTime={5}/>
        <TimerChallenge title="Level3" targetTime={10}/>
        <TimerChallenge title="Level4" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
