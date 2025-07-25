import ResumeDetails from "./components/ResumeDetails";
import ResumeForm from "./components/ResumeForm";
import ResumeDataProvider from "./context/ResumeContext";
function App() {

  return (
    <ResumeDataProvider>
      <div className="flex gap-1">
        <div className="w-6/12">
          <ResumeDetails />
        </div>
        <div className="w-6/12">
          <ResumeForm />
        </div>
      </div>

    </ResumeDataProvider>
  );
}

export default App;
