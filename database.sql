PGDMP          )                {            DB-AAA    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398    DB-AAA    DATABASE     {   CREATE DATABASE "DB-AAA" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE "DB-AAA";
                postgres    false            �            1259    24616    courses    TABLE       CREATE TABLE public.courses (
    course_id character varying(32) NOT NULL,
    course_title character varying(30),
    course_price double precision NOT NULL,
    description text,
    instructor character varying(32),
    course_group character varying(30)
);
    DROP TABLE public.courses;
       public         heap    postgres    false            �            1259    24583    users    TABLE     �   CREATE TABLE public.users (
    id character varying(32) NOT NULL,
    username character varying(345),
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    24616    courses 
   TABLE DATA           o   COPY public.courses (course_id, course_title, course_price, description, instructor, course_group) FROM stdin;
    public          postgres    false    215   �       �          0    24583    users 
   TABLE DATA           7   COPY public.users (id, username, password) FROM stdin;
    public          postgres    false    214   '       m           2606    24624     courses courses_course_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_course_title_key UNIQUE (course_title);
 J   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_course_title_key;
       public            postgres    false    215            o           2606    24622    courses courses_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public            postgres    false    215            i           2606    24589    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    214            k           2606    24591    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    214            �   }  x��WMo�6=˿��i�4ZjI-�+�ٍ� c`/�PTI�"5$�v��o��궍 �-Q��{�^㤀�H�q���X�\�=�94��ϖ/�v��}!{�\�����;`�3�5WK�y)�y�5�S\�:�N>u�y\,u�L�|���������;&5�9��?R���q�t����lFv�J�
CK��c'cUM���W�>�5WV�O ��:�`y�Z.5�i7RH��L�c�'z|��{露�[iF�,p�a����Ż]�o�i��@�p9���yu�,?�"M��'��e�eq��Y}�J�
c~�?�+�?ݼ�i!C�[�eP�rʙ�0f�Yo�g�9�mF��r-�z�����y�������5Ʋ� �Rk����@�i��Xp�&�5��[�4k�Q��	cY�Z�A�|��@c��$���3мR�1n�Z��C.��d�\����KE��ջ�A���bD�3z������}������4N��X���8��$���&�9��iA,�7d����Q�=KO�����N*=X*a<���-o�GQ�T�����U���!�q�����K2�{ܲ�c˜�a���SY��#����v��'nQ�'���|�[�QZ�gN`����Ci.��T�^w�'���G��x��E/���K2�e+I��]�Q���-�}��p�&��*i�R��N�UX�q&�2=d��{0`��s?H^�G;YF��+��.��h}ּ�b���9��]h���"=�x$����I���Zn΁��S�r�Dg���v���aM���v��$m(x�|uJ�qu0�Ak��Ã�?d�%��E�Eg���Q�[�;kƶc.uP 
�з�[���R�P�_�}7C'9{���%ew��!��A�fi|h�:?dE,x�ѷ�}�F��%���d%�4�䏘��m�I)�����E4�X�7<*��B���3Yc�{C�O�6|���[�_���x2���`kh$jZ� ��-����ϓ�c�6C��1��hq�p�	�_8>a1�h�Ndu��yZ�8~s��/kbt��P$GΣ���y{f?_�w3����s��±V��ͦnzΪ����ϼׄ�ܖ��P�f�s��&T,�I�B�e��2�̀탹Qt�Eo�0 ��HV6�>U��e�;�!���r�rű⧙��<�՗P�buL"dEsZ��k�v�Dm���B9��q��q�s�T��P�~�-`_���c����ݙ���m-d�8Ɯ�$m�HE|���Ѣ�t}ឯ�sU�=�û��R˵۾�Oߚ?<�N�#���4&�ִ������Z\k.~��ܗZ��!�2�Ч��M�J8^�3ڛ��d�vĆF;������՗psb�k��v�H:��}�P��5'=u�yU���֐�u	�l �!�ӌG��1 �_�S㎒��}��7�%��e(7Svt��.?�qij
k��򌍦w�W^��+&n��/��j�iV��G����R2=�n�l��4r:a�r�� �4tm %�P���y�.���;�HE �,9�ʪ&��\R�e������]��o8ID()����pp=|�k�?�z�� q%�ąs�&���9)�[l �d��F�퀂�~����^��a����?�=��Ϲ%Z�Kw��S��7�����4��o��Sǆ��M��Ά�*�[�d�V����q�b����m��(�4�cQ���ˢ�2��C������w��)e�q�V?ߵ�y�z��\KGu,5����0 FOCƇ�O8!,VLs�%��MMm�n�S"���o
.��L���hr8����k�����7SR�"����--p(����Y_��~v)�yhY��������S*?      �   �   x��M� @�5Ɓ� �� �C��j����g�f����c�"j����J��T;�{�d;��U���C���u��4�h�Q�$s�Z�"��
�{�;�#�FD�l5�4r/n٧�r[e~㾺	�_����-�     