export const stringLengthMixin = {
	computed: {
		stringLength() {
			return `${this.string} (${this.string.length})`;
		}
	}
};
