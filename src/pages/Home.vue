<template>
  <div class="container page-cont home-page">
    <div class="row">
      <div class="col-6 text-center self-center">
        <img
          class="img-fluid"
          src="../assets/img/homepage.gif"
          alt="My APP"
        >
      </div>

      <div class="col-6 self-center">
        <div class="content">
          <h1>
            Welcome to my
            <span class="d-block">recruitment test app!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugit optio soluta nostrum modi ipsam magni ex molestiae tempore quod et?
          </p>
          <hr>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti repellat ipsum numquam dolore soluta odit vitae alias incidunt tenetur hic?
          </p>

          <base-button
            title="Get in touch"
            redirect="/contact-us"
            primary
          />
        </div>
      </div>
    </div>
  </div>
</template>
