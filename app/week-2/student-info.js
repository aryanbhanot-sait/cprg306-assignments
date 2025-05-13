import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1 className="text-3xl">Name - Aryan Bhanot</h1>
            <h1 className="text-3xl">Student ID - 000940549</h1>
            <h3 className="text-2xl">GitHub Link - <Link href="https://github.com/aryanbhanot-sait/cprg306-assignments" className="text-cyan-600 hover:text-cyan-400">Click Me</Link></h3>
        </main>
    );
}