import FirstFormWapper from "./componenets/first form/firstFormWrapper";
import PageWrapper from "./componenets/page wrapper/pageWrapper";


function App() {
  return(
    <PageWrapper>
      <h1 className="text-2xl font-extrabold mb-12 text-gray-500">فرم ثبت نام</h1>
      <FirstFormWapper></FirstFormWapper>
    </PageWrapper>
  );
}

export default App;
