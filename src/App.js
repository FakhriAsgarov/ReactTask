import UserCv from './Components/task-1/userCv/UserCv';
import Profile from './Components/task-2/Profile/Profile';
import UserLogin from "./Components/task-3/UserLogin/UserLogin";
import Dice from './Components/task-4/Dice';
function App() {
  return (
    <div className="App">
      <h1 className="tasks">TASK 1</h1>
      <UserCv/>                             {/* TASK 1 */}

      <h1 className="tasks">TASK 2</h1>
     <Profile name='Johnny Bravo' email='asdfg@gmail.com' address='afsdf district asdfasd city' info='asdasdfasdfasdf'/>
    <Profile name='Peter Griffin' email='asdfg@gmail.com' address='afsdf district asdfasd city' info='asdasdfasdfasdf'/>
    <Profile name='Bruce Wayne' email='asdfg@gmail.com' address='afsdf district asdfasd city' info='asdasdfasdfasdf'/>
    <Profile name='Anthony Hopkins' email='asdfg@gmail.com' address='afsdf district asdfasd city' info='asdasdfasdfasdf'/>
    <Profile name='Tom Hardy' email='asdfg@gmail.com' address='afsdf district asdfasd city' info='asdasdfasdfasdf'/>      {/* TASK 2 */}


    <h1 className="tasks">TASK 3</h1>
      <UserLogin/>           {/* TASK 3 */}

      <h1 className="tasks">TASK 4</h1>

    <Dice/>                  {/* TASK 4 */}
    </div>



  )
}

export default App;
