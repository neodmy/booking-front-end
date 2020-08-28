module.exports = {
  extends: ["@commitlint/config-conventional"],
  /* Examples
   * chore: run tests on travis ci
   * fix(server): send cors headers
   * feat(blog): add comment section
   */

  /* Common Errors
   * subject must not be sentence-case, start-case, pascal-case, upper-case [subject-case]
   * type must be lower-case [type-case]
   * type must be one of
   *   [build, chore, ci, docs, feat, fix, improvement, perf, refactor, revert, style, test]
   */

  /*
   * build - Changes to improve build process
   * ci - Changes to improve ci process
   * chore - Updating grunt tasks; no production code change
   * docs - Add or edit documentation.
   * feat - Implementation of new feature.
   * improvement - Enhancements on existing features.
   * fix - Changes that solve existing bugs in the application.
   * perf - Changes to improve the application's performance.
   * refactor - Code enhancements that do not alter the functionality.
   * style - Fix front end styles
   * revert - Revert production changes
   * test - Add or edit tests
   */
};
