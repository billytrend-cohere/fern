# frozen_string_literal: true

require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class GetTraceResponsesPageRequest
      # @return [Integer]
      attr_reader :offset
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param offset [Integer]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::GetTraceResponsesPageRequest]
      def initialize(offset: OMIT, additional_properties: nil)
        @offset = offset if offset != OMIT
        @additional_properties = additional_properties
        @_field_set = { "offset": offset }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of GetTraceResponsesPageRequest
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::GetTraceResponsesPageRequest]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        offset = struct["offset"]
        new(offset: offset, additional_properties: struct)
      end

      # Serialize an instance of GetTraceResponsesPageRequest to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given
      #  hash and check each fields type against the current object's property
      #  definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.offset&.is_a?(Integer) != false || raise("Passed value for field obj.offset is not the expected type, validation failed.")
      end
    end
  end
end
