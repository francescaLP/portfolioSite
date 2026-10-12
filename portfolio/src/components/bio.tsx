export default function Bio(){
    return (
        <div id="bio" className="w-full py-12">
            <h2 className="text-center bg-sky-200 w-full">bio</h2>
        <div id="bio"className="p-10 py-12 min-h-60 flex">
            <div className="flex min-w-40 bg-red-400 items-center justify-center p-20"><p>picture</p></div>
            <div className="flex-row gap-2 items-center justify-center p-8">
                
                <div className="flex-row p-4 ">
                    <p>New York based full stack developer and game designer with a passion for sound</p>
                    <div className="flex-row">
                        <a href="https://github.com/Frankie-Pettigrew/" className="text-red-400 hover:text-blue-400 p-4">Github</a>
                        <a href="https://soundcloud.com/stuttersprite" className="text-red-400 hover:text-blue-400 p-4">Soundcloud</a>
                    </div>
                </div>
            </div>
        </div></div>
    );
}