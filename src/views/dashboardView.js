import { body, main } from '../app.js';
import { html, render } from '../lib/lit-html.js';
import { navigationBar } from '../views/navigationView.js';

export function showDashboard() {

    body.style.background = 'rgb(255, 255, 255)';

    const template = html `
    <section id="dashboardView">
        <div id="navigation">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus similique ipsa eum libero suscipit non id amet? Corporis earum recusandae deleniti nostrum esse adipisci reprehenderit, mollitia inventore, ipsum quaerat magni?
Eligendi molestias laborum totam. Facere labore odit quam repellendus dignissimos quisquam, quae eum cum adipisci incidunt libero architecto cumque nesciunt officiis culpa eaque! Ea repudiandae soluta inventore, possimus officia maxime?
Maiores deserunt assumenda molestias eaque enim adipisci, non cupiditate quae debitis dolore officia natus provident exercitationem eos nisi distinctio molestiae aspernatur autem beatae ipsum id sunt? Expedita repellendus dolores itaque.
Necessitatibus, sint amet, facilis quaerat laborum fugiat at, recusandae rerum deleniti dolores nihil nam voluptate veritatis distinctio iusto ad perspiciatis a doloremque officiis illo aperiam! Ab iste quia consequatur recusandae!
Dignissimos inventore ullam impedit earum numquam amet, ad provident id, enim quibusdam placeat facilis fuga architecto! Quos illo aspernatur ipsum corrupti vero, veritatis ex, amet laudantium ratione, enim voluptatum expedita!
Earum distinctio porro nemo quisquam expedita error veritatis facere id repellendus sunt optio iusto impedit itaque, corporis officiis modi natus deserunt amet. Ab voluptate hic rerum minima reprehenderit adipisci id!
Error nulla veniam nostrum quam adipisci quidem veritatis tempora qui iste incidunt consectetur atque velit voluptas alias, porro laudantium voluptate rem soluta ipsum reiciendis saepe eius. Quos modi consequatur natus.
Iure cupiditate, tempora eveniet molestias, impedit possimus cumque officia dolorum illo, esse nam. Facere corrupti voluptas, consequatur expedita quisquam, dolor assumenda nemo quae quia asperiores deleniti dolores ea iste voluptate?
Corporis temporibus eos sapiente expedita quaerat, blanditiis aperiam, eveniet aut explicabo suscipit sint repellat sequi voluptatibus beatae, distinctio accusamus? Nulla, ipsa ab perferendis fuga facere asperiores eum culpa modi nam?
Aspernatur dolorem dolore neque nihil inventore obcaecati placeat sed similique perferendis consequatur reprehenderit ratione quam voluptates, officiis error incidunt explicabo dicta debitis asperiores eligendi libero est laudantium, quidem impedit. Quod!
Eius dignissimos minima quas obcaecati provident neque dolores possimus autem velit odio! Dignissimos adipisci delectus pariatur nam cumque minus nobis! Ipsum minima voluptatum a possimus eveniet, officiis exercitationem quasi ducimus?
Dolorem delectus id soluta error quo, non laborum praesentium rerum voluptate neque quasi ipsam cumque reiciendis nobis, minus molestiae, dolore modi eaque quae sit quia asperiores. Alias corrupti aliquam a.
Error quasi laborum dolores deserunt blanditiis cumque eaque id. Inventore iusto maxime totam assumenda quibusdam excepturi ullam eaque rem fugit nam in magnam necessitatibus, debitis et recusandae asperiores, unde quo.
Corporis expedita doloremque, distinctio blanditiis, sequi consequuntur quidem ut optio laboriosam dolorem, accusantium quod aperiam praesentium cumque. Illo ea pariatur commodi. Nam obcaecati voluptates reiciendis repellat ea molestiae voluptatibus ullam.
Praesentium dolorem hic, rem amet itaque sit tempora mollitia voluptatem ad animi perferendis ab aliquam quaerat voluptatum doloribus quia veritatis repellat quibusdam consequatur iure quos vel? Qui eius nam molestias?
Odit earum quod eligendi dolor officia fugiat obcaecati magni repellat explicabo, error, numquam consectetur doloribus quidem facere sit! Quidem dolor earum sequi blanditiis quos architecto itaque soluta, tempore esse minus!
Illo libero aut velit nulla optio quo veniam mollitia corrupti magni sequi non aperiam vero, sed amet. Ea, qui? Excepturi dolorum, eveniet similique tenetur reiciendis deserunt esse incidunt sunt iusto?
Numquam, pariatur placeat! Aliquid doloremque natus perspiciatis nulla eos facilis illum totam quis explicabo itaque nisi ratione, est cum, voluptates facere fugit voluptas. Nobis, suscipit atque hic perspiciatis consectetur praesentium.
Eum error natus vero nesciunt temporibus, debitis distinctio at, voluptatibus reprehenderit, perspiciatis atque quia corporis officiis voluptas quod ipsam voluptate ducimus. Earum harum ipsum nihil autem amet eaque totam voluptatem!
Accusamus, nemo repellat dolor quod vero illum corporis temporibus amet fugit esse. Vitae earum quisquam aut recusandae ea exercitationem repellat. Rerum unde iure optio, repellendus itaque eveniet reprehenderit quia voluptas.</p>    
        </div>
    </section>
        `
    render(template, main);
    const navigation = document.getElementById('navigation');
    render(navigationBar(), navigation);
}