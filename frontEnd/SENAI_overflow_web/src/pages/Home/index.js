import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";
import Profile from "../Profile";



function Home() {

    const posts = [{
        author: {
            name: "Fulano",
            image: ""
        },
        created_at: "10/10/2021",
        title: "Este é um post sobre JS",
        description: "JS é uma linguagem de programação muito top",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Ciclano",
                    image: ""
                },
                created_at: "11/10/2021",
                description: "Realmente JS é muito legal"
            }
        ]
    }];


    return (
        <>
            <Header />
            <Main>
                <nav>
                    <Profile/>
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard({post}) {

    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/06/07193822/lightscape-LtnPejWDSAY-unsplash-2048x1365.jpg.webp" />
                <section>
                   {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment}/>)}
            </footer>
        </Post>

    );

}

export default Home;