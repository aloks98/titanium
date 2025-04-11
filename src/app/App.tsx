import '../lib/globals.css';
import {Button} from "@/base/button";

const App = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-screen w-screen">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button>Click Me</Button>
        </div>
    );
};

export default App;
