import styled from "styled-components";

const Icon = styled.svg.attrs({
    version: '1.1', 
    xmlns: 'http://www.w3.org/2000/svg', 
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512',
})`
    height: 1.5em;
    width: 1.5em;
    fill: currentColor;
    position: relative;
`;

export const CartIcon = () => {
    return(
        <Icon>
            <path d="M131.2,105.4275H464l-62.4,187.2H131.2a20.8,20.8,0,1,0,0,41.6H401.6v41.6H131.2a62.4,62.4,0,0,1,0-124.8h6.864l-27.664-83.2-20.8-62.4H48v-41.6h62.4a20.8,20.8,0,0,1,20.8,20.8Zm20.8,374.4a41.6,41.6,0,1,1,41.6-41.6A41.6,41.6,0,0,1,152,479.8275Zm208,0a41.6,41.6,0,1,1,41.6-41.6A41.6,41.6,0,0,1,360,479.8275Z"/>
        </Icon>
    );
};

export const HeartIcon = () => {
    return(
        <Icon>
            <path d="M256,448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63,114.54,98.46,64,159.08,64c48.11,0,80.1,28,96.92,48.21C272.82,92,304.81,64,352.92,64,413.54,64,463.37,114.54,464,176.65c.56,55.68-19.71,107-62,157C361.91,381.14,307.78,413.43,265,442Z"/>
        </Icon>
    );
};

export const LeafIcon = () => {
    return(
        <Icon>
            <path d="M453.3819,58.3277v43.79c0,210.7806-117.64,306.5263-262.7368,306.5263H149.0013c4.6417-65.9469,25.1789-105.861,78.7772-153.285,26.3613-23.3179,24.128-36.7832,11.1445-29.0543-89.4182,53.2042-133.8207,125.1065-135.7912,239.9225l-.0657,8.101h-43.79c0-29.8425,2.54-56.9263,7.5756-81.7111q-7.5537-42.4977-7.5756-115.3415c0-120.9246,98.0228-218.9474,218.9474-218.9474C322.0135,58.3277,365.803,80.2225,453.3819,58.3277Z"/>
        </Icon>
    );
};

export const GithubIcon = () => {
    return(
        <Icon>
            <path d="M328.3543,284.912c7.9931,0,14.6194,3.952,20.384,11.7669,5.7051,7.8743,8.736,17.472,8.736,28.9714,0,11.44-3.0309,21.1269-8.736,28.912-5.7349,7.8743-12.3909,11.7669-20.384,11.7669-8.2606,0-15.5109-3.8926-21.2457-11.7669-5.7052-7.7851-8.736-17.472-8.736-28.912,0-11.4994,3.0309-21.0971,8.736-28.9714,5.7051-7.8446,12.9554-11.7669,21.2457-11.7669M430.5714,179.1589C452.7383,203.2572,464,232.496,464,266.9052q0,33.3395-7.696,60.112-7.8,26.6091-19.4331,43.3531a126.8167,126.8167,0,0,1-28.9418,29.3874c-11.47,8.4983-22.0183,14.62-31.6457,18.512a162.3913,162.3913,0,0,1-33.0126,9.0926,267.3966,267.3966,0,0,1-28.0206,3.6548c-6.3291.2675-13.0148.416-20.3543.416-1.6343,0-7.22.1189-16.2537.4457-8.944.3863-16.64.4754-22.6423.4754s-13.6983-.0891-22.6422-.4754c-9.0332-.3268-14.6195-.4457-16.2538-.4457-7.31,0-14.0251-.1485-20.3543-.416a266.4112,266.4112,0,0,1-28.02-3.6548,156.8911,156.8911,0,0,1-33.0126-9.0926c-9.6274-3.8926-20.2057-10.0137-31.616-18.512A126.3651,126.3651,0,0,1,75.1291,370.37q-11.6332-16.7144-19.4332-43.3531Q47.9852,300.2743,48,266.9052c0-34.4092,11.2617-63.6777,33.4286-87.7463q-3.6549-1.8274-.2377-36.1623,2.808-34.3646,14.7085-63.3508c27.7532,2.9417,62.1029,18.69,103.1383,46.9782,13.8469-3.536,32.7154-5.4377,56.9623-5.4377,25.3166,0,44.304,1.9017,56.992,5.4674q28.0354-18.9428,53.6343-30.7245C383.98,88.1737,396.4892,83.568,404.3337,82.35l11.7669-2.6743q12.0344,28.9268,14.7383,63.3508,3.3873,34.2755-.2675,36.1326m-173.68,232.3657c50.1577,0,87.776-6.0023,113.5383-18.0366,25.4057-12.0045,38.3909-36.7863,38.3909-74.1669q0-32.5371-24.4252-54.3177a54.8222,54.8222,0,0,0-29.3874-14.4411q-16.7144-2.7189-51.1086,0c-22.85,1.8423-38.5692,2.6743-47.008,2.6743-11.44,0-23.7714-.5349-39.1932-1.7532-15.4514-1.1885-27.5748-1.9314-36.3405-2.3177a110.74,110.74,0,0,0-28.4663,3.2091q-15.3771,3.6549-25.3463,12.6286c-15.4811,13.936-23.4743,32.0023-23.4743,54.3177q0,56.0709,38.0343,74.1669c25.2572,12.0343,62.7863,18.0366,112.9737,18.0366h1.8126M184.5668,284.912c7.9635,0,14.6195,3.952,20.3543,11.7669,5.7052,7.8743,8.736,17.472,8.736,28.9714,0,11.44-3.0308,21.1269-8.736,28.912-5.7051,7.8743-12.3908,11.7669-20.3543,11.7669-8.29,0-15.5108-3.8926-21.2754-11.7669-5.7051-7.7851-8.736-17.472-8.736-28.912,0-11.4994,3.0309-21.0971,8.736-28.9714,5.7349-7.8446,12.9555-11.7669,21.2754-11.7669"/>
        </Icon>
    );
};

export const LinkedinIcon = () => {
    return(
        <Icon>
            <path d="M49.326,185.85h90.011V456.722H49.326ZM94.934,55.278C64.127,55.278,44,75.503,44,102.049c0,26,19.538,46.813,49.756,46.813h.574c31.396,0,50.948-20.814,50.948-46.813C144.689,75.503,125.727,55.278,94.934,55.278ZM360.339,179.487c-47.779,0-69.184,26.28-81.125,44.71V185.85H189.176c1.192,25.411,0,270.872,0,270.872h90.038V305.448c0-8.102.589-16.174,2.958-21.978,6.519-16.174,21.333-32.923,46.182-32.923,32.602,0,45.622,24.851,45.622,61.248V456.721H464V301.398C464,218.199,419.598,179.487,360.339,179.487Z"/>
        </Icon>
    );
};

export const PlusIcon = () => {
    return(
        <Icon>
            <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "/>
        </Icon>
    );
};

export const MinusIcon = () => {
    return(
        <Icon>
            <rect height="64" width="384" x="64" y="224"/>
        </Icon>
    );
};