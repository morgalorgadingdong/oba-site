<form id="submissionForm" class="d-flex justify-content-center flexWrap col-12 col-md-6" name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="form-name" value="netlify-form-example" />
    <div class="fields d-flex justify-content-center  flexWrap">
        <div class="field col-12">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div id="emailContainer" class="field col-6">
            <label for="email" class="col-12">Email</label><br>
            <input type="text" name="email" id="email" required/>
        </div>
        <div id="telContainer" class="field col-6">
            <label for="tel">Phone Number</label><br>
            <input type="tel" name="tel" id="tel"/>
        </div>
        <div class="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
        </div>
    </div>
    <ul class="actions col-12 d-flex justify-content-center px-0">
        <li><input type="submit" value="Submit" class="col-12" id="submitbtn"/></li>
    </ul>
</form>

<style>
#submissionForm{
    /* min-height: 78vh; */
    max-width: 600px;
}

#submissionForm {
    margin-bottom: 25px;
}

.fields {
    width: 100%;
}

.field {
    padding: 10px 5px;
    width: 100%;
}

#name {
    width: 100%;
}

#tel, #email {
    width: 100%;
}

#telContainer, #emailContainer {
    width: 50%;
}

#message  {
    width: 100%;
}

/* label {
    width: 30%;
}   */

input {
    width: 100%;
    flex-grow: 2;
    line-height: 1.5rem;
}

</style>