import Header from "@/src/components/Header";
import NavBar from "@/src/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        <div className="w-[12%] bg-gray-400">
            <NavBar></NavBar>
        </div>
        <div className="w-[88%] bg-[#F7F8FA]">
           <Header></Header>
            {children} 
        </div>
    </div>  
  );
}