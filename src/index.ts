import _ from 'lodash';

const MAIN_FILE = process.argv[_.findIndex(process.argv, '--main') + 1];

const main = async (): Promise<void> => {
  if (_.isUndefined(MAIN_FILE)) {
    throw new Error("Please provide an argument '--main'.");
  }
};

main();
