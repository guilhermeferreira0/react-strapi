export default {
  title: 'O titulo que eu quero',
  html: `
  <ul>
    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
  </ul>

  <form action="#" method="post">
    <div>
        <label for="name">Text Input:</label>
        <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>

    <div>
        <h4>Radio Button Choice</h4>

        <label for="radio-choice-1">Choice 1</label>
        <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

      <label for="radio-choice-2">Choice 2</label>
        <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
    </div>

    <div>
    <label for="select-choice">Select Dropdown Choice:</label>
    <select name="select-choice" id="select-choice">
      <option value="Choice 1">Choice 1</option>
      <option value="Choice 2">Choice 2</option>
      <option value="Choice 3">Choice 3</option>
    </select>
    </div>

    <div>
    <label for="textarea">Textarea:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
    </div>

    <div>
      <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox" id="checkbox" />
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>`,
  background: false,
};
