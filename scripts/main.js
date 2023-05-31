
document.addEventListener('DOMContentLoaded', function(){
        const avatar = document.querySelector('#avatar');
        const name = document.querySelector('#nome');
        const userName = document.querySelector('#nomde-de-usuario');
        const amountRepositories = document.querySelector('#repositorio');
        const followersElem = document.querySelector('#seguidores');
        const followingElem = document.querySelector('#seguindo');
        const linkElem = document.querySelector('#link-do-perfil');
        const gitHubInfos = 'https://api.github.com/users/fde95'

        fetch(gitHubInfos)
            .then(function(resposta){
                return resposta.json();
            })
            .then(function(json){
                avatar.src = json.avatar_url;
                name.innerText = json.name;
                userName.innerText = json.login;
                amountRepositories.innerText = json.public_repos;
                followersElem.innerText = json.followers;
                followingElem.innerText = json.following;
                linkElem.href = json.html_url;
            });
});