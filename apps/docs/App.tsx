import "./src/styles.css";
import {ThemeProvider} from '@e412/titanium';
import {DocumentationLayout} from "./components/documentation-layout";

const App = () => {
    return (
        <ThemeProvider defaultThemeColorScheme="default">
            <DocumentationLayout/>
        </ThemeProvider>
    );
};

export default App;
